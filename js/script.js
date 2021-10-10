    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyBhR8yjzIt_Luz3XA8ydr19WYAqOQIaP_Q",
        authDomain: "monitorco2-c08d0.firebaseapp.com",
        databaseURL: "https://monitorco2-c08d0-default-rtdb.firebaseio.com",
        projectId: "monitorco2-c08d0",
        storageBucket: "monitorco2-c08d0.appspot.com",
        messagingSenderId: "696526889633",
        appId: "1:696526889633:web:3cf8257d85fe5303c246e0"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    import { getDatabase, ref, onValue, query, limitToLast } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js";

    const db = getDatabase();
    const dbRef = query(ref(db, '/sensors/CO2/'), limitToLast(1));

    let spanValor = document.getElementById('valor');
    let imgLoading = document.getElementById('loading');

    onValue(dbRef, (snapshot) => {
        imgLoading.style = "display: none";
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            console.log("Key: " + childKey);
            console.log("Value: " + childData.value);
            spanValor.innerText = childData.value;
        });
    });