import { useCallback, useEffect, useMemo, useState } from 'react'

function getPreferredVoice(language: string) {
  const voices = window.speechSynthesis.getVoices()
  const languagePrefix = language.split('-')[0].toLowerCase()
  const languageVoices = voices.filter((voice) =>
    voice.lang.toLowerCase().startsWith(languagePrefix),
  )

  return (
    languageVoices.find((voice) =>
      /microsoft|google|premium|natural|luciana|francisca|neural|online/i.test(voice.name),
    ) ||
    languageVoices.find((voice) => voice.lang.toLowerCase() === language.toLowerCase()) ||
    languageVoices[0]
  )
}

export function useSpeechReader(language: string) {
  const isSupported =
    typeof window !== 'undefined' &&
    'speechSynthesis' in window &&
    'SpeechSynthesisUtterance' in window
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [voiceName, setVoiceName] = useState('Voz padrao do navegador')

  useEffect(() => {
    if (!isSupported) {
      return undefined
    }

    const updateVoiceName = () => {
      setVoiceName(getPreferredVoice(language)?.name || 'Voz padrao do navegador')
    }

    updateVoiceName()
    window.speechSynthesis.addEventListener('voiceschanged', updateVoiceName)

    return () => {
      window.speechSynthesis.cancel()
      window.speechSynthesis.removeEventListener('voiceschanged', updateVoiceName)
    }
  }, [isSupported, language])

  const getReadableText = useCallback(() => {
    const main = document.querySelector('main')
    const text = main?.textContent?.replace(/\s+/g, ' ').trim()

    return text || 'SkillBridge. Plataforma social para transformar conhecimento em oportunidade.'
  }, [])

  const speak = useCallback(() => {
    if (!isSupported) {
      return
    }

    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(getReadableText())
    const preferredVoice = getPreferredVoice(language)

    utterance.lang = language
    utterance.rate = 0.88
    utterance.pitch = 0.96
    utterance.volume = 1
    utterance.voice = preferredVoice || null

    utterance.onstart = () => {
      setIsSpeaking(true)
      setIsPaused(false)
    }

    utterance.onend = () => {
      setIsSpeaking(false)
      setIsPaused(false)
    }

    utterance.onerror = () => {
      setIsSpeaking(false)
      setIsPaused(false)
    }

    window.speechSynthesis.speak(utterance)
  }, [getReadableText, isSupported, language])

  const pause = useCallback(() => {
    if (!isSupported || !isSpeaking) {
      return
    }

    if (isPaused) {
      window.speechSynthesis.resume()
      setIsPaused(false)
      return
    }

    window.speechSynthesis.pause()
    setIsPaused(true)
  }, [isPaused, isSpeaking, isSupported])

  const stop = useCallback(() => {
    if (!isSupported) {
      return
    }

    window.speechSynthesis.cancel()
    setIsSpeaking(false)
    setIsPaused(false)
  }, [isSupported])

  return useMemo(
    () => ({ isSupported, isSpeaking, isPaused, voiceName, speak, pause, stop }),
    [isPaused, isSpeaking, isSupported, pause, speak, stop, voiceName],
  )
}
