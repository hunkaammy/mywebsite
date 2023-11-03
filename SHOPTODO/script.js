// Firebase config
var config = {
    apiKey: "AIzaSyDXTnqM1_gCNui8EW9uAqWof7lpnbGolEc",
    authDomain: "firetodo666.firebaseapp.com",
    databaseURL: "https://notes-12519-default-rtdb.firebaseio.com",
    storageBucket: "firetodo666.appspot.com",
};

// Firebase intialise
firebase.initializeApp(config);
// Set Todos firebase object
var TodosRef = firebase.database().ref('Todolist');
// Create Vue component
var todoList = new Vue({
	el: '#todolistApp',
	data: {
		todos: [],
		newTodo: '',
		editOption: false,
		tempKey:'',
		warningLabel: '',
		redWarning: false,
	},
	methods: {
		testt(){
			console.log(this.getDate(todo.time))
		},		
		// 把 Warning關閉 (inputWarning)
		inputTyping(){
			this.warningLabel = '';
			this.redWarning = false;
		},
		// Push new post(newTodo) in to Todos
		submitHandler() {
			// Empty input can't be submit
			if (	this.newTodo.length == 0 
				 || this.newTodo.length == ""
				 || this.redWarning == "true"
			){ 
				this.warningLabel = 'Todo can not be empty!';
				this.redWarning = true;
				return
			}
			// Main Function
			else{
				let newTodoList = {
					newTodo : this.newTodo, // new post
					newTime: firebase.database.ServerValue.TIMESTAMP, // Date 
				};
				TodosRef.push(newTodoList)
				this.newTodo = '';
				this.warningLabel = '';
				this.redWarning = false;
			}
		},
		
		editHandler(idx){
			// 按鈕開啟
			this.editOption = true;
			this.tempKey = idx; // editHandler(idx)參數取出，存進tempKey裡
			console.log("editHandler.idx is",idx); // 測試現在的idx參數(被選取到的idx)
			// edit 主要程式碼 開始:
			TodosRef.once('value', (snapshot) => {
				var todos = snapshot.val();
				// "this.newTodo" 是 "v-model"綁定的欄位(v-model="newTodo")
				this.newTodo = todos[idx].newTodo; // edit 主要程式碼 結束.
				this.redWarning = false;
				this.warningLabel = " 'Done' to finish edit " // inputWarning 警告視窗
				this.$refs.newTodo.focus();
			});
		},
		
		editDone(){
			var idx = this.tempKey; // 把tempKey的參數內容，塞回 idx 要給下面的child(idx)用
			var editOfTodo = this.newTodo;
			console.log("idx is ",idx); // 測試 選取到的idx
			if( editOfTodo == '' ){
				return
			}else{
				TodosRef.child(idx).update({
					newTodo: editOfTodo
				}, function(error) {
					console.log(error);
				});
			};

			this.newTodo = ''; // input clean
			this.editOption = false; // close button
			this.warningLabel = ''; // close warning
		},

		editCancel(){
			this.newTodo = '';
			this.editOption = false;
			this.warningLabel = '';
		},
		// Remove child based on key - firebase function
		removeHandler(idx) {
			// 防止 edit中 可以 del , 輸入框裡有資料時，無法刪除任何一筆資料
			if (			this.newTodo.length != 0 
				 || this.newTodo.length != ""
				){
				return	
			}else{
				let target = this.todos[idx];
				// child(idx) 的 idx = @click="removeHandler(idx)"
				if (confirm(`Do you want to Del this \n" ${target.newTodo} " ?`)) {
					TodosRef.child(idx).remove()
				}
			}
		},

		getTime(newTime) {
			if (typeof newTime === 'undefined') return;
			let time = new Date(newTime);
			let year = time.getFullYear();
			let month = ["Jan","Feb","Mar","Apr","May","June",
							 "July","Aug","Sep","Oct","Nov","Dec"]
			let day = time.getDate();
			let week = time.day = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
			let hour = time.getHours();
			let minute = time.getMinutes();
			return month[time.getMonth()] + "/" + (parseInt(day, 10) < 10 ? '0' + day:day)  + "/" + year + "<br> " + hour + ":" + (parseInt(minute, 10) < 10 ? '0' + minute : minute) + "&nbsp;" + week[time.getDay()];
		},
	},
	
	mounted() {
		// Watch for value changes on Todos, set todoList.todos property as the value
		TodosRef.on('value', (snapshot) => {
			todoList.todos = snapshot.val();
		})
	},
})