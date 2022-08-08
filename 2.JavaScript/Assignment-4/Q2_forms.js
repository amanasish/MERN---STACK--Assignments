const form=document.getElementsByTagName('form')[0];
form.addEventListener('submit',(event)=>{
    let valid=1;
    let error_text=''
    const full_name=document.querySelector("#full_name").value;
    if(full_name=='' && valid==1)
    {
        error_text='Please enter your name';
        valid=0;
    }
    
    const email=document.querySelector("#email").value;
    if(email=='' && valid==1)
    {
        error_text='Please enter your email';
        valid=0;
    }
    const No=document.querySelector("#No").value;
    if(No=='' && valid==1)
    {
        error_text='Please enter your number';
        valid=0;
    }
    const ShiftValues=document.getElementsByName("gender");
    
    let shift='';
    for(let i=0;i<ShiftValues.length;i++)
    {
        if(ShiftValues[i].checked){
            shift=ShiftValues[i].value;
        }
    }
    if(shift=='' && valid==1)
    {
        error_text='Please select your gender';
        valid=0;
    }
    const addr=document.querySelector("#addr").value;
    if(addr=='' && valid==1)
    {
        error_text='Please enter your address';
        valid=0;
    }
    const pincode=document.querySelector("#pincode").value;
    if(pincode=='' && valid==1)
    {
        error_text='Please enter your pincode';
        valid=0;
    }
    const password=document.querySelector("#password").value;
    if(password=='' && valid==1)
    {
        error_text='Please enter your password';
        valid=0;
    }
    const check=document.querySelector("#confir").checked?document.querySelector("#confir").value:'';
    
    if(valid==0 && error_text!='')
    {
        document.querySelector(".error_message").style.display='block';
        document.querySelector(".error_message").innerText=error_text;
        document.querySelector(".error_message").style.color='red';
    }
    if(valid==1)
    {
        document.querySelector("#show_name").innerText=full_name;
        document.querySelector("#e").innerText=email;
        document.querySelector("#p").innerText=No;
        document.querySelector("#g").innerText=shift;
        document.querySelector("#a").innerText=addr;
    }
    event.preventDefault();
})