class Ui{

    constructor(){
        this.form = document.querySelector('#task-form');
        this.taskList = document.querySelector('.list-group');
        this.clearBtn = document.querySelector('.clear-tasks');
        this.filter = document.querySelector('#filter');
        this.taskInput = document.querySelector('#task');
    }

    loadEventListeners(){

        this.form.addEventListener('submit', e =>this.addTask(e));
    }

    addTask(e){

        if(this.taskInput.value === ''){
            alert('Add a task');
            return;
        }
        
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.appendChild(document.createTextNode(this.taskInput.value));
        

        // Create new link element
        const link = document.createElement('a');
        link.className = 'nav-link';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);

        // Append li to ul
        this.taskList.appendChild(li);

        // Clear input
        this.taskInput.value = '';

        e.preventDefault();
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