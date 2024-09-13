import gsap from 'gsap'
import { SplitText } from 'gsap-trial/SplitText'
import './style.css'

gsap.registerPlugin(SplitText)

const buttons = document.querySelectorAll('.button')

buttons.forEach((button) => {
	const text = button.querySelector('.text')
	const shadow = button.querySelector('.shadow')

	const textSplit = new SplitText(text, { type: 'chars' })
	const shadowSplit = new SplitText(shadow, { type: 'chars' })

	gsap.set(shadowSplit.chars, { scaleY: 0 })

	const duration = (i) => 0.2 + i * 0.02

	button.addEventListener('mouseenter', () => {
		gsap.to(textSplit.chars, {
			scaleY: 0,
			duration,
		})

		gsap.to(shadowSplit.chars, {
			scaleY: 1,
			duration,
		})
	})

	button.addEventListener('mouseleave', () => {
		gsap.to(textSplit.chars, {
			scaleY: 1,
			duration,
		})
		gsap.to(shadowSplit.chars, {
			scaleY: 0,
			duration,
		})
	})
})
