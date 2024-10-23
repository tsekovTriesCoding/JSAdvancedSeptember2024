function solve() {
    class Contact {
        constructor(firstName, lastName, phone, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.phone = phone;
            this.email = email;
            this._online = false;
        }

        render(id) {
            const targetParentElement = document.getElementById(id);
            const articleElement = document.createElement('article');

            const divTitle = document.createElement('div');
            divTitle.classList.add('title');
            divTitle.textContent = `${this.firstName} ${this.lastName}`;

            if (this._online) {
                divTitle.classList.add("online");
            }

            const buttonInfo = document.createElement('button');
            buttonInfo.value = '&#8505;';

            buttonInfo.addEventListener('click', (e) => {
                if (e.target.tagName === 'BUTTON') {
                    if (e.target.parentElement.nextSibling.style.display == 'none') {
                        e.target.parentElement.nextSibling.style.display = "block";
                    } else {
                        e.target.parentElement.nextSibling.style.display = "none";
                    }
                }
            });

            divTitle.append(buttonInfo);

            const divInfo = document.createElement('div');
            divInfo.classList.add('info');

            const spanPhone = document.createElement('span');
            spanPhone.textContent = `&phone; ${this.phone}`;
            divInfo.append(spanPhone);

            const spanEmail = document.createElement('span');
            spanEmail.textContent = `&#9993;${this.email}`;
            divInfo.append(spanEmail);
            divInfo.style.display = 'none';

            articleElement.append(divTitle);
            articleElement.append(divInfo);
            targetParentElement.append(articleElement);
        }

        set online(state) {
            this._online = state;

            if (document.querySelectorAll("article > div.title").length != 0) {
                if (this._online) {
                    Array.from(document.querySelectorAll("article > div.title"))
                        .filter((el) => el.innerText.includes(this.firstName))[0]
                        .classList.add("online");
                } else {
                    Array.from(document.querySelectorAll("article > div.title"))
                        .filter((el) => el.innerText.includes(this.firstName))[0]
                        .classList.remove("online");
                }
            }
        }

        get online() {
            return this._online;
        }
    }

    let contacts = [
        new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
        new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
        new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
    ];

    contacts.forEach(c => c.render('main'));

    // After 1 second, change the online status to true 
    setTimeout(() => contacts[1].online = true, 2000);
}

solve();