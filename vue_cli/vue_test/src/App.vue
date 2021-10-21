<template>
	<div>
		<button @click="getStudents"></button>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		name:'App',
		method: {
			getStudents(){
				axios.get('http://localhost:5000/student').then(
					response => {
						console.log('请求成功了',response.data)
					},
					error => {
						console.log('请求失败了',error.message)
					}
				)
			}
		}
	}
</script>

