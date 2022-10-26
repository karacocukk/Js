// let result = 3 + 5 
// console.log(result);


// let result = 8 - 5 
// console.log(result);
 
// let result = 3 * 5 
// console.log(result);


// let result = 3 ** 2 
// console.log(result);


// let result = 15 % 2 
// console.log(result);

// ********** Boolean Veri Tipi ile Çalışmak **********

// 0 ve 1 ' i Anlamak
// let isActive = false // 0
// isActive = true  // 1
// console.log(isActive)

// let userName ; 
// let isUserName = Boolean(userName)
// console.log(isUserName)

// Boolean("11") // True
// Boolean("0")  // True
// Boolean("")   // False
// Boolean("-0") // False
// Boolean("-0.1") // True

// userName = "user"
// console.log("User Name: ",Boolean(userName))


// a = Boolean(userName.length > 0) // True 
// console.log("Username > 0 ?:",a)


// let price = 111
// let string_Price = "111"
// let hasPassword = true

// console.log(
//     "price:",
//     typeof(price)
// )

// console.log(
//     "StringPrice:",
//     typeof(string_Price)
// )
// console.log(
//     "hasPassword:",
//     typeof(hasPassword)
// )

// string(metinsel) bilgiden int ve float'a dönüştürmek
// let number1 = "11"
// number1 = parseInt(number1)
// console.log(
//     "number1:",number1,
//     typeof(number1)
// )

// let number2 = "11px"
// number2 = parseInt(number2)

// console.log("number2:",number2,typeof(number2))

// let number3 = "11.1"
// number3 = parseInt(number3)

// console.log("number3:",number3,typeof(number3))

// let number4 = "11.4px"
// number4  = parseFloat(number4)
// console.log("number4:",number4,typeof(number4))

// let number5 = 55
// number5 = number5.toString()
// console.log(number5,typeof(number5))

//isInteger( ) yöntemi, sayıların tam sayı olup olmadığını belirler.

// a = Number.isInteger(123)
// console.log("isNumber:",a)

a = Number.isInteger(123)
a = Number.isInteger(-123)
a = Number.isInteger(0.5)

// console.log("isNumber:",a)

//isFinite () yöntemi, bir değerin sonlu bir sayı olup olmadığını belirler.
a = Number.isFinite(0)
a = Number.isFinite("123")
a = Number.isFinite("hello")

// console.log("isFinite:",a)

// if (9<5) console.log("hello 3<5");
// else console.log("merhaba 3 <! 5")

a = window.prompt("a sayisi giriniz: ","0")
b = window.prompt("b sayisi giriniz: ","0")

if (a < b) document.writeln("a sayisi küçüktür b sayisindan ( a < b)")
else document.writeln("a sayisi küçük veya eşittir b sayisina");
