

const menuDiv = () => {

    const content_div = document.getElementById('tab_content')
    const menuImg = document.createElement('img');
    menuImg.src = "https://static.wixstatic.com/media/ee7bcd_6d70b89fb8844f529fa608473d1aabe4~mv2_d_2550_3300_s_4_2.png/v1/fill/w_590,h_761,al_c,q_90,usm_0.66_1.00_0.01/Sweets%20Brigadeiro%20Store.webp";
    content_div.appendChild(menuImg);

}

export {menuDiv}