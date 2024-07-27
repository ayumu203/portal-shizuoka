//音楽用の装置
let musics = [];
musics[0] = new Audio("music/C-Side.mp3");
musics[1] = new Audio("music/Squid Squad.mp3");
musics[2] = new Audio("music/カレントリップ.mp3");
musics[3] = new Audio("music/Unwelcome School.mp3");
musics[4] = new Audio("music/CC2 Art of Blade.mp3");
musics[5] = new Audio("music/星界ちゃんと可不ちゃんのおつかい合騒曲.mp3");
function playMusic(n) {
    musics[n].loop = true;
    const targetName = "playButton" + (n + 1);
    const target = document.getElementsByClassName(targetName);
    target.item(0).style.backgroundColor = "greenyellow";
    musics[n].play();
}
function pauseMusic(n) {
    musics[n].pause();
    const targetName = "playButton" + (n + 1);
    const target = document.getElementsByClassName(targetName);
    target.item(0).style.backgroundColor = "royalblue";
}
//todoList用のプログラム
let texts = [];
let count = 0;
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    if (taskInput.value !== '') {
        const task = document.createElement('li');
        texts.push(taskInput.value);
        const serializedArray = JSON.stringify(texts);
        localStorage.setItem('myArray', serializedArray);
        count++;
        task.appendChild(document.createTextNode(count + ": " + `${taskInput.value}`));
        taskList.appendChild(task);
        taskInput.value = '';
        // タスクをクリックしたら完了（または削除）するようにする
        task.addEventListener('click', function () {
        });
    } else {
        alert('タスクを入力してください');
    }
}

function deleteTask() {
    let num = deleteInput.value - 1;
    texts.splice(num, 1);
    const serializedArray = JSON.stringify(texts);
    localStorage.setItem('myArray', serializedArray);
    location.reload();
}

window.onload = () => {
    //データ復旧
    const serializedArray = localStorage.getItem('myArray');
    const array = JSON.parse(serializedArray);
    for (let i = 0; i < array.length; i++) {
        const taskList = document.getElementById('taskList');
        const task = document.createElement('li');
        task.appendChild(document.createTextNode(i + 1 + ": " + array[i]));
        texts.push(array[i]);
        taskList.appendChild(task);
        taskInput.value = '';
        count++;
        //削除用
        task.addEventListener('click', function () {
        });
    }

    const timeTableData=JSON.parse(localStorage.getItem('timeTableData'));
    const days=["Monday","Tuesday","Wednesday","Thursday","Fryday"];
    //1コマから5コマまで
        for(let o=1; o<=5; o++){
            const subject = document.getElementById(days[0]+o+"Subject");
            const teacher = document.getElementById(days[0]+o+"Teacher");
            const classroom = document.getElementById(days[0]+o+"Classroom");
            subject.innerHTML=timeTableData.Monday[o].subject;
            teacher.innerHTML=timeTableData.Monday[o].teacher;
            classroom.innerHTML=timeTableData.Monday[o].classroom;
        }
        for(let o=1; o<=5; o++){
            const subject = document.getElementById(days[1]+o+"Subject");
            const teacher = document.getElementById(days[1]+o+"Teacher");
            const classroom = document.getElementById(days[1]+o+"Classroom");
            subject.innerHTML=timeTableData.Tuesday[o].subject;
            teacher.innerHTML=timeTableData.Tuesday[o].teacher;
            classroom.innerHTML=timeTableData.Tuesday[o].classroom;
        }
        for(let o=1; o<=5; o++){
            const subject = document.getElementById(days[2]+o+"Subject");
            const teacher = document.getElementById(days[2]+o+"Teacher");
            const classroom = document.getElementById(days[2]+o+"Classroom");
            subject.innerHTML=timeTableData.WednesDay[o].subject;
            teacher.innerHTML=timeTableData.WednesDay[o].teacher;
            classroom.innerHTML=timeTableData.WednesDay[o].classroom;
        }
        for(let o=1; o<=5; o++){
            const subject = document.getElementById(days[3]+o+"Subject");
            const teacher = document.getElementById(days[3]+o+"Teacher");
            const classroom = document.getElementById(days[3]+o+"Classroom");
            subject.innerHTML=timeTableData.Thursday[o].subject;
            teacher.innerHTML=timeTableData.Thursday[o].teacher;
            classroom.innerHTML=timeTableData.Thursday[o].classroom;
        }
        for(let o=1; o<=5; o++){
            const subject = document.getElementById(days[4]+o+"Subject");
            const teacher = document.getElementById(days[4]+o+"Teacher");
            const classroom = document.getElementById(days[4]+o+"Classroom");
            subject.innerHTML=timeTableData.Friday[o].subject;
            teacher.innerHTML=timeTableData.Friday[o].teacher;
            classroom.innerHTML=timeTableData.Friday[o].classroom;
        }

}