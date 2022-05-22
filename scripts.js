const paypalBody = `
<html lang="en">

<head>
    <meta charset="UTF-8">
    <script src="https://www.paypalobjects.com/api/checkout.js"></script>
    <link rel="stylesheet" href="https://cdn.discordapp.com/attachments/658099251947110442/658320443740258305/css.css">
    <title>Paypal Proofs Generator</title>
</head>
<style>
  * {
    overflow: hidden;
  }
  p {
            font-size: 20px;
        }
    
        
        .container {
            align: center;
            background-color: rgb(192, 192, 192);
            width: 80%;
                border-radius: 15px;
        }
    
        .skill {
            background-color: rgb(116, 194, 92);
            color: white;
            padding: 1%;
            text-align: center;
            font-size: 20px;
                border-radius: 15px;
        }
    
        .html {
            width: {{VALUEFEE}}%;
        }
</style>
<body>
    <div class="payout">
        <img src="ppl.jpg">

        <br><br>

        <p>{{VALUEPRICE}} refunded to {{VALUEEMAIL}}</p>

        <br>
<di>
    Refund details have been emailed to the buyer

</div>
        <div class="header__nav--right">
            <div class="dx-auth-block profile__container">
                
            </div>
            </div>

        <a href="#" onclick="goHome()"><b>  View Original Transaction </b></a> |
        <br>
         <a href="#" onclick="goHome()"><b> View Refunded Transaction</b></a>
    <body>
        <div>
           
    
    </div>


<br><br><br>









    <script>
        goHome = () => {
            window.location = "index.html"
        } 
    </script>
</body>
</body>

</html>
`
paypalProofGen = () => {
    const price = document.getElementById("price").value
    const category = document.getElementById("category").value
    const email = document.getElementById("email").value
    const fee = document.getElementById("fee").value

    let valuePrice = ""
    if (category == "eur") {
        valuePrice = `${price} EUR`
    } else if (category == "usd") {
        valuePrice = `${price} USD`
    } else if (category == "gpb") {
        valuePrice = `${price} GPB`
    } else if (category == "cad") {
        valuePrice = `${price} CAD`
    }


    document.write(paypalBody.replace("{{VALUEPRICE}}", valuePrice).replace("{{VALUEEMAIL}}", email))
}