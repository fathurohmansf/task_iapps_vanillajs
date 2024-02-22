// file ini untuk penghubung antara UI  HTML dan model User

document.addEventListener('DOMContentLoaded', () => {

  //membuat tanggal yg berformat otomatis
  const now = new Date();
  const year = now.getFullYear();
  // kalo getMonth itu bulan nya di mulai dr index 0  jadi harus di tambahkan +1
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  const taskForm = document.getElementById('taskForm');
  const taskManager = new Task();

  taskForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const taskData = {
      taskName: document.getElementById('taskName').value,
      taskPriority: document.getElementById('taskPriority').value,
      createdAt: `${year}-${month}-${day}`
    };

    const result = taskManager.saveTask(taskData);

    if (result.success){
      return window.location.href = '../tasks.html';
      //alert('Berhasil disimpan');
    }
    else{
      console.log('proses simpan data gagal');
    }


  });

});