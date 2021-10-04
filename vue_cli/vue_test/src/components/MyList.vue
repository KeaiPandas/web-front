<template>
	<ul class="todo-main">
		<MyItem v-for="todpObj in todos" :key="todpObj.id" :todo="todoObj" />
	</ul>
</template>

<script>
	import MyItem from './MyItem'

	export default {
		name:'MyList',
		components:{MyItem},
		data() {
			return {
				todos:[
					{id:'001',title:'吃饭',done:true},
					{id:'002',title:'睡觉',done:false},
					{id:'003',title:'抽烟',done:true},
					{id:'004',title:'开车',done:true}
				]
			}
		}
		//声明接收App传递过来的数据，其中todos是自己用的，checkTodo和deleteTodo是给子组件MyItem用的
	// 	props:['todos','checkTodo','deleteTodo']
	}
</script>

<style scoped>
	/*main*/
	.todo-main {
		margin-left: 0px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding: 0px;
	}

	.todo-empty {
		height: 40px;
		line-height: 40px;
		border: 1px solid #ddd;
		border-radius: 2px;
		padding-left: 5px;
		margin-top: 10px;
	}
</style>