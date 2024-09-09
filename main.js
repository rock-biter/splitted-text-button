import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import './style.css'

gsap.registerPlugin(SplitText)

const buttons = document.querySelectorAll('.button')

buttons.forEach((button) => {
	const text = button.querySelector('.text')
	const shadow = button.querySelector('.shadow')

	const textSplit = new SplitText(text, { type: 'chars' })
	const shadowSplit = new SplitText(shadow, { type: 'chars' })

	gsap.set(shadowSplit.chars, { scaleY: 0, yPercent: 0 })

	button.addEventListener('mouseenter', () => {
		gsap.to(textSplit.chars, {
			scaleY: 0,
			duration: (i) => 0.15 + i * 0.02,
		})

		gsap.to(shadowSplit.chars, {
			scaleY: 1,
			duration: (i) => 0.15 + i * 0.02,
		})
	})

	button.addEventListener('mouseleave', () => {
		gsap.to(textSplit.chars, {
			scaleY: 1,
			duration: (i) => 0.15 + i * 0.02,
		})
		gsap.to(shadowSplit.chars, {
			scaleY: 0,
			duration: (i) => 0.15 + i * 0.02,
		})
	})
})
