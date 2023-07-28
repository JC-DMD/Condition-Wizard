var hiddenText = "javascript:void function(){function a(a){var b=document.createElement("div");b.style.cssText="display: block; position: fixed; z-index: 100; left: 0; top: 0; width: 100%; height: 100%; overflow: hidden; background-color: rgba(0,0,0,0.4);";var c=document.createElement("div");c.style.cssText="background-color: #fefefe;%20margin:%20auto;%20padding:%2020px;%20border:%201px%20solid%20#888;%20width:%2080%;%20text-align:%20left;%20position:%20absolute;%20top:%2050%;%20left:%2050%;%20transform:%20translate(-50%,%20-50%);%20max-height:%2080vh;%20overflow-y:%20auto;",c.innerHTML=a,b.appendChild(c),document.body.appendChild(b),b.addEventListener("click",function(a){a.target===b&&(b.style.display="none",document.body.style.overflow="")}),document.body.style.overflow="hidden";var%20l=document.getElementById("manage-case-header-text"),m=l?l.innerText.split("%20")[0]:"unknown",i=document.createElement("button");i.textContent="%F0%9F%97%B2%20Open%20Condition%20Wizard%20%F0%9F%97%B2",i.style.marginBottom="10px",i.style.backgroundColor="black",i.style.color="white",i.style.fontWeight="bold",i.onclick=function(){window.open("https://jc-dmd.github.io/Condition-Wizard/");%20var%20a=f.join("\r\n"),b="data:text/plain;charset=utf-8,"+encodeURIComponent(a),c=document.createElement("a");c.setAttribute("href",b),c.setAttribute("download",m+"_conditions.txt"),c.click()},c.insertBefore(i,c.firstChild);var%20h=document.createElement("br");c.insertBefore(h,i.nextSibling);var%20e=document.createElement("button");e.textContent="Copy%20to%20clipboard",e.style.marginRight="10px",e.onclick=function(){var%20a=f.map((a,b)=>`${b+1}.%20${a}`).join("\n");navigator.clipboard.writeText(a)},c.insertBefore(e,h.nextSibling);var%20g=document.createElement("button");g.textContent="Save%20to%20.txt%20file",g.style.marginRight="10px",g.onclick=function(){var%20a=f.join("\r\n"),b="data:text/plain;charset=utf-8,"+encodeURIComponent(a),c=document.createElement("a");c.setAttribute("href",b),c.setAttribute("download",m+"_conditions.txt"),c.click()},c.insertBefore(g,e.nextSibling)}var%20b=Array.from(document.querySelectorAll("div[ng-if='!item.data']")).find(a=>a.textContent.includes("Unsatisfied"));if(!b)return%20void%20a("<p>No%20Conditions%20Found</p>");var%20c=parseInt(b.textContent.match(/\d+/)[0]),d=Array.from(document.querySelectorAll(".condition-header-descr,.condition-detail-descr")).filter(conditionElement%20=>%20conditionElement.textContent.trim()%20!==%20'');if(d.length<c)return%20void%20a("<p>Not%20all%20conditions%20have%20been%20loaded.%20Please%20scroll%20to%20the%20bottom%20of%20the%20page%20and%20try%20again.</p>");var%20e=document.querySelectorAll("tt-task-card[name='condition-card']"),f=[];Array.from(e).forEach(function(a){var%20b=a.querySelector("md-switch[aria-checked]");if(!b||"true"!==b.getAttribute("aria-checked")){var%20c=a.querySelector(".condition-header-descr"),d=a.querySelector(".condition-detail-descr");c&&f.push(c.innerText),d&&f.push(d.innerText)}});var%20g="<table%20style='border-collapse:%20collapse;'>";f.forEach(function(a,b){g+=`<tr><td%20style='border:1px%20solid%20#ddd;%20padding:8px;%20vertical-align:%20top;%20text-align:%20right;'>${b+1}.</td><td%20style='border:1px%20solid%20#ddd;%20padding:8px;'>${a}</td></tr>`}),g+="</table>",a(g)}();";

document.getElementById('copyButton').addEventListener('click', function() {
    navigator.clipboard.writeText(hiddenText)
        .then(() => alert("Copied the text: " + hiddenText))
        .catch(err => console.error('Error copying text: ', err));
});
