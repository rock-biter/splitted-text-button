import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import './style.css'

gsap.registerPlugin(SplitText)

// gsap.registerEffect({
// 	name: 'hover',
// 	effect: (targets, config) => {
// 		// console.log(targets)
// 		const [button] = targets
// 		const text = button.querySelector('.text')
// 		const shadow = button.querySelector('.shadow')

// 		const textSplit = new SplitText(text, { type: 'chars' })
// 		const shadowSplit = new SplitText(shadow, { type: 'chars' })

// 		const tl = gsap.timeline({ ease: 'power3.out' })

// 		tl.to(textSplit.chars, {
// 			yPercent: -20,
// 			stagger: {
// 				from: 'left',
// 				amount: 0.1,
// 			},
// 			duration: 0.2,
// 			scaleY: 0,
// 		}).from(
// 			shadowSplit.chars,
// 			{
// 				stagger: {
// 					from: 'left',
// 					amount: 0.1,
// 				},
// 				duration: 0.2,
// 				yPercent: 0,
// 				scaleY: 0,
// 			},
// 			0
// 		)

// 		return tl
// 	},
// 	extendTimeline: true,
// })

gsap.registerEffect({
	name: 'hover',
	effect: (targets, config) => {
		console.log(targets)

		const tween = gsap
			.to(targets, {
				...config,
			})
			.pause()

		return tween
	},
})

const buttons = document.querySelectorAll('.button')

buttons.forEach((button) => {
	const text = button.querySelector('.text')
	const shadow = button.querySelector('.shadow')

	const textSplit = new SplitText(text, { type: 'chars' })
	const shadowSplit = new SplitText(shadow, { type: 'chars' })
	gsap.set(shadowSplit.chars, { scaleY: 0, yPercent: 0 })
	// const tl = gsap.timeline({ paused: true })
	// tl.hover(button)

	const textTls = textSplit.chars.map((char, i) => {
		return gsap.effects.hover(char, {
			yPercent: -0,
			scaleY: 0,
			duration: 0.15 + i * 0.02,
			ease: 'power2.inOut',
		})
	})

	const shadowTls = shadowSplit.chars.map((char, i) => {
		return gsap.effects.hover(char, {
			yPercent: 0,
			scaleY: 1,
			duration: 0.15 + i * 0.02,
			ease: 'power2.inOut',
		})
	})

	button.addEventListener('mouseenter', () => {
		// tl.play()
		textTls.forEach((tl) => tl.play())
		shadowTls.forEach((tl) => tl.play())
	})

	button.addEventListener('mouseleave', () => {
		// tl.reverse()
		textTls.forEach((tl) => tl.reverse())
		shadowTls.forEach((tl) => tl.reverse())
	})
})
