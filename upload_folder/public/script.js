document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('uploadForm');
    uploadForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(uploadForm);
  
      try {
        const response = await fetch('/upload', {
          method: 'POST',
          body: formData
        });
        const data = await response.text();
        alert(data);
        uploadForm.reset();
      } catch (error) {
        console.error('Error:', error);
        alert('Error uploading file');
      }
    });
  });
  let body = document.body;
let profile = document.querySelector('.header .flex .profile');
let sideBar = document.querySelector('.side-bar');
/*let profilebody = document.querySelector('.profile-body');*/

document.querySelector('#user-btn').onclick = () => {
    profile.classList.toggle('active');
};

document.querySelector('#menu-btn').onclick = () => {
    
    sideBar.classList.toggle('active');
    body.classList.toggle('active');
};

document.querySelector('.side-bar .close-side-bar').onclick = () => {
    sideBar.classList.remove('active');
    body.classList.remove('active');
};

let s = document.querySelector('header .flex .dashboard');
document.getElementById('menu-btn').addEventListener('click', function () {
    s.classList.toggle('active');
    profile.classList.remove('active');
});

window.onscroll = () => {
    profile.classList.remove('active');
    s.classList.remove('active');
};

if (window.innerWidth < 1200) {
    sideBar.classList.remove('active');
    body.classList.remove('active');
}
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const sideBar = document.querySelector('.side-bar');
    const navDashboard = document.querySelector('.dashboard');

    document.getElementById('toggle-btn').onclick = () => {
        body.classList.toggle('dark');
        sideBar.classList.toggle('dark', body.classList.contains('dark'));
        navDashboard.classList.toggle('dark', body.classList.contains('dark'));

        const toggleBtn = document.getElementById('toggle-btn');
        toggleBtn.classList.toggle('fa-sun');
        toggleBtn.classList.toggle('fa-moon');
        /*profilebody.classList.toggle('active');*/
    };
});





document.querySelector('#toggle-btn').onclick = () => {
    body.classList.toggle('dark');
    sideBar.classList.toggle('dark', body.classList.contains('dark'));

    // Add or remove 'dark' class from the navigation dashboard based on body's dark class
    const navDashboard = document.querySelector('.dashboard');
    navDashboard.classList.toggle('dark', body.classList.contains('dark'));
};
document.querySelector('.toggle-button').addEventListener('click', function() {
    document.querySelector('.side-bar .nav').classList.toggle('active');
});



const dropArea =document.querySelector('.drop-section')
const listSection =document.querySelector('.list-section')
const listContainer =document.querySelector('.list')
const fileSelector =document.querySelector('.file-selector')
const fileSelectorInput =document.querySelector('.file-selector-input')

fileSelector.onclick = () => fileSelectorInput.click()
/*
fileSelectorInput.onchange = () => {
    [...fileSelectorInput.files].forEach((file) =>{
        if(typeValidation(file.type)){
            uploadFile(file)
        }
    })
}

// when file is over the drag area
dropArea.ondragover = (e) => {
       e.preventDefault();
       [...e.dataTransfer.items].forEach(items) => {
          if(typeValidation(item.type)){
            dropArea.classList.add('drag-over-effect')
          }
       }

}

//when file leave the drag area
dropArea.ondragleave =() => {
    dropArea.classList.remove('drag-over-effect')
}

//when file drop on the drag area
dropArea.ondrop = (e) => {
  e.preventDefault();
  dropArea.classList.remove('drag-over-effect')
  if(e.dataTransfer.items){
    [...e.dataTransfer.items].forEach(item) => {
        if(item.kind === 'file'){
            const file =item.getAsFile();
            if(typeValidation(file.type)){
                uploadFile(file)
            }
        }
    }
  }else{
          [...e.dataTransfer.files].forEach(file) => {
            if(typeValidation(file.type)){
                uploadFile(file)
            }
          }
  }
}
//check the file type
function typeValidation(type) {
    var splitType = type.split('/')[0];
    if (type === 'application/pdf' || splitType === 'image' || splitType === 'video') {
        return true;
    }
    return false;
}


//upload file function
function uploadFile(file){
    var http = new XMLHttpRequest()
    var  data = new FormData()
    data.append('file',file)
    http.onload = () => {
      //completed
    }
    http.upload.onprogress = (e) => {
        var percent_complete = (e.loaded / e.total)*100
        console.log(percent_complete);
    }
    http.open('POST', 'sender.php',true)
    http.send(data)
}*/
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const express = require('express');
// const app = express();

// // Middleware setup
// app.use(bodyParser.json());
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: true }));

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/your_database_name', { useNewUrlParser: true, useUnifiedTopology: true }); // Update 'your_database_name' to your actual database name
// var db = mongoose.connection;

// // Check MongoDB connection
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("Connected to MongoDB");
// });

// // Define routes
// app.post('/sign_up', (req, res) => {
//     var email = req.body.email;
//     var pass = req.body.password;
//     var data = {
//         'email': email,
//         'password': pass
//     };
//     db.collection('col1').insertOne(data, (err, collection) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('Data has been inserted');
//         }
//         return res.redirect('home.html'); // Redirect to home page after sign up
//     });
// });

// app.get('/', (req, res) => {
//     res.redirect('login.html'); // Redirect to login page by default
// });

// // Start server
// const PORT = 5501; // Set your desired port number
// app.listen(PORT, () => console.log(`Server is running on http://127.0.0.1:${PORT}`));
