class Tooltip{

}

class ProjectItem{

    constructor(id, updateProjectList){
        this.id = id;
        this.updateProjectListhandler = updateProjectList;
        this.connetInfoButton();
        this.connetSwitchButton();
    }

    connetInfoButton(){

    }

    connetSwitchButton(){

        const projectItemElement = document.getElementById(this.id);
        const switchButton = projectItemElement.querySelector('button:last-of-type');
        switchButton.addEventListener('click', this.updateProjectListhandler);
    }
}

class ProjectList{

    projects = [];

    constructor(type){

        this.type = type;
        const projectItems = document.querySelectorAll(`#${type}-projects li`);
        for(const projectItem of projectItems){
            this.projects.push(new ProjectItem(projectItem.id, this.switchProject.bind(this)));
        }
        console.log(this.projects);
    }

    setSwitchHandlerFuncion(switchHandler){
        this.switchHandler = switchHandler;
    }

    addProject(){
        console.log(this.projects);
    }

    switchProject(projectId){
        // const projectIndex = this.projects.findIndex(p => p.id === projectId);
        // this.projects.splice(projectIndex, 1);
        this.switchHandler(this.projects.find(p=> p.id === projectId));
        this.projects = this.projects.filter(p=>p.id !== projectId)
    }
}

class App{

    static init(){
        const activeProjectList = new ProjectList('active');
        const finishedProjectList = new ProjectList('finished');

        activeProjectList.setSwitchHandlerFuncion(finishedProjectList.addProject.bind(finishedProjectList));
        finishedProjectList.setSwitchHandlerFuncion(activeProjectList.addProject.bind(activeProjectList));
    }
}

App.init();