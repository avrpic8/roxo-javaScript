class Ui{

    constructor(){
        this.form = document.querySelector('#task-form');
        this.taskList = document.querySelector('.list-group');
        this.clearBtn = document.querySelector('.clear-tasks');
        this.filter = document.querySelector('#filter');
        this.taskInput = document.querySelector('#task');
    }

    addTask(e){

        if(this.taskInput.value === ''){
            alert('Add a task');
            return;
        }
        
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center py-0';
        li.appendChild(document.createTextNode(this.taskInput.value));
        

        // Create new link element
        const link = document.createElement('a');
        link.className = 'nav-link delete-item';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);

        // Append li to ul
        this.taskList.appendChild(li);

        // Clear input
        this.taskInput.value = '';

        e.preventDefault();
    }

    removeTask(e){
        if(e.target.parentElement.classList.contains('delete-item')){
            if (confirm('Are You Sure?')) {
                e.target.parentElement.parentElement.remove();
            }
        }
    }

    clearTasks(){ 

        if(confirm('Are You Sure To Delete All Tasks?')){
            while(this.taskList.firstChild) {
                this.taskList.removeChild(this.taskList.firstChild);
            } 
        }    
    }

    loadEventListeners(){

        // add task event
        this.form.addEventListener('submit', e =>this.addTask(e));

        // remove task event
        this.taskList.addEventListener('click', e =>this.removeTask(e));

        // clear tasks event
        this.clearBtn.addEventListener('click', this.clearTasks.bind(this));
    }

    run(){

        this.loadEventListeners();
    }
}

class App{

    static init(){

        const ui = new Ui();
        ui.run();
    }
}

App.init();