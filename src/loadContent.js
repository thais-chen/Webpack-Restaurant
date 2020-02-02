import {menuDiv} from "./menu";
import {aboutTab} from "./about";
import {contactTab} from "./contact";

const contentDiv = () => {
    const content_div = document.getElementById('content');
    const tab_ul = document.createElement('ul');

    const tabs_div = document.createElement('div');

    const tabs_content = document.createElement('div');
    tabs_content.id="tab_content"

    const tab_about = document.createElement('li');
    tab_about.id = "about"

    const tab_menu = document.createElement('li');
    tab_menu.id = "menu"

    const tab_contact = document.createElement('li');
    tab_about.id = "contact"

    const h1Header = document.createElement('h1')
    content_div.appendChild(h1Header)

    tab_about.textContent="About";
    tab_menu.textContent="Menu";
    tab_contact.textContent="Contact Info";

    tab_ul.appendChild(tab_about);
    tab_ul.appendChild(tab_menu);
    tab_ul.appendChild(tab_contact);
    tabs_div.appendChild(tab_ul);

    tabs_div.id="tabsDiv"
    h1Header.textContent="Madeira Delicacies"
    content_div.appendChild(tab_ul);
    content_div.appendChild(tabs_content)
    aboutTab();
    tab_menu.addEventListener('click', () => {
        tabs_content.innerHTML = "";
        tabs_content.style.background = "antiquewhite";
        menuDiv()
    })
    tab_about.addEventListener('click',() => {
        tabs_content.innerHTML = "";
        tabs_content.style.background = "antiquewhite";
        aboutTab();
    })
     
    tab_contact.addEventListener('click', () => {
        tabs_content.innerHTML = ""
        tabs_content.style.background = "antiquewhite";
        contactTab();
    })
}
 


export {contentDiv}