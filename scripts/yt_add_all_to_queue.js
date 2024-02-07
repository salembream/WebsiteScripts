

(()=>{
	
	const vids = document.querySelectorAll('ytd-rich-item-renderer');
	
	let toOpenMenu = true;
	let itemIndex = 0;
	
	console.log("founds ", vids.length, ' videos')
	
	const _f = ()=>{
		const elem = vids[itemIndex];
		if(toOpenMenu)
		{
			elem.querySelector('#primary button[aria-label="Action menu"]')?.click()
		}
		else 
		{
			
			var items = document.evaluate('//yt-formatted-string[contains(text(),"Add to queue")]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
			for (var i = 0; i < items.snapshotLength; i++) {
				console.log('x')

				items.snapshotItem(i).click();        
			}
		}
		
		if(!toOpenMenu)
		{
			itemIndex++;
		}
		toOpenMenu = !toOpenMenu;
		
		if(itemIndex<vids.length)
		{
			setTimeout(_f, 120);
		}
		
	}
	_f()
})()


