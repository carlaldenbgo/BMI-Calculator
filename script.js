let button = document.getElementById("calc");

button.addEventListener("click", () => 
{
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const result = document.getElementById("result");

    let height_status=false, weight_status=false;

    if(height === " " || isNaN(height) || (height <= 0))
    {
        document.getElementById("height_error").innerHTML = "Please input a valid height";
    }
    else
    {
        document.getElementById("height_error").innerHTML = " ";
        height_status = true;
    }

    if(weight === " " || isNaN(weight) || (weight <= 0))
    {
        document.getElementById("weight_error").innerHTML = "Please input a valid weight";
    }
    else
    {
        document.getElementById("weight_error").innerHTML = " ";
        weight_status = true;
    }

    if(height_status && weight_status)
    {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        
        if(bmi < 18.5)
        {
            result.innerHTML = "You are Underweight";
        }
        else if(bmi >= 18.5 && bmi <= 24.9)
        {
            result.innerHTML = "You are Normal"
        }
        else if(bmi >= 25 && bmi <= 29.9)
        {
            result.innerHTML = "You are Overweight";
        }
        else
        {
            result.innerHTML = "You are Obese";
        }
    }
    else
    {
        alert("Incorrect/Invalid Input");
        result.innerHTML = "";
    }
});