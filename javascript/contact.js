function myFunction() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value
    const obj = {
        "name": name,
        "email": email,
        "message": message.trim()
    }

    printInfo(obj);
}

function printInfo({name, email, message}) {
    const section_2 = document.querySelectorAll('section')[1];
    const newDiv = document.createElement('div');
    const nameHeader = document.createElement('h1');
    const emailHeader = document.createElement('h1');
    const messageHeader = document.createElement('h1');
    nameHeader.innerText = name;
    emailHeader.innerText = email;
    messageHeader.innerText = message;
    newDiv.appendChild(nameHeader);
    newDiv.appendChild(emailHeader);
    newDiv.appendChild(messageHeader);
    section_2.appendChild(newDiv);
}