function getStyle(element, attr) {
	if(element.currentStyle) {
		return element.currentStyle[attr];
	} else {
		return getComputedStyle(element, false)[attr];
	}
}