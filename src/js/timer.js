class CountdownTimer {
	constructor({ selector, targetDate }) {
		this.selector = selector;
		this.targetDate = targetDate.getTime();

		this.start();
	}

	start() {
		const intervalId = setInterval(() => {
			const currentTime = Date.now();
			const deltaTime = this.targetDate - currentTime;
			const {days, hours, mins, secs} = this.getTimeComponents(deltaTime);

			const daysEl = document.querySelector(`${this.selector} span[data-value="days"]`);
			const hoursEl = document.querySelector(`${this.selector} span[data-value="hours"]`);
			const minsEl = document.querySelector(`${this.selector} span[data-value="mins"]`);
			const secsEl = document.querySelector(`${this.selector} span[data-value="secs"]`);

			daysEl.textContent = this.pad(days);
			hoursEl.textContent = this.pad(hours);
			minsEl.textContent = this.pad(mins);
			secsEl.textContent = this.pad(secs);
		}, 1000);
	}

	getTimeComponents(time) {
		const days = Math.floor(time / (1000 * 60 * 60 * 24));
		const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
		const secs = Math.floor((time % (1000 * 60)) / 1000);

		return { days, hours, mins, secs };
	}
	
	pad(value) {
		return String(value).padStart(2, '0');
	}

}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

