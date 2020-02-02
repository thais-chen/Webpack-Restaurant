 
const aboutTab = () => {

    const content_div = document.getElementById('tab_content');
    content_div.style.background="antiquewhite";
    const about_p = document.createElement('p');
    about_p.innerHTML= "We specialize in brigadeiros (bree-ga-day-ros), the handcrafted traditional and unique Brazilian sweet. Gorgeous looking and deliciously irresistible, they are referred by some as a cross between fudge and chocolate truffles. \r\n <br> <br>  Brigadeiros versatility is impressive. The treat is perfect for parties, but also makes a great gift, and would be a heavenly match with a cup of coffee as well. Originally, its main ingredients are condensed milk, butter, and chocolate, slowly cooked, to be then hand-rolled one at a time. <br> <br> Whether you want to keep it classic or play with flavors, choosing from coconut, pistacchio to peanut butter, there\'s a whole world of ingredients to explore through our exclusives recipes. Let us know your favorite one and we will customize it just for you!" 

    content_div.appendChild(about_p);


}
export {aboutTab}