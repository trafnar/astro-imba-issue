tag test-component
	prop count = 0
	<self>
		css s:200px bgc:blue2 p:10px
		<button @click=(count++)> "Count: {count}"