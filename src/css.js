const string = `
.head *{margin: 0;padding: 0;box-sizing: border-box;}
.head *::before, .head *::after{box-sizing: border-box;}
.head{
    transform: scale(0.5);
    background: #469ef8;
    border: 8px solid black;
    height: 700px;
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    border-radius: 50%;
    position: relative;
}
.head .face{
    border: 5px solid black;
    background: white;
    height: 580px;
    width: 580px;
    border-radius: 50%;
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -290px;
}
.head .nose{
    border: 3px solid black;
    height: 100px;
    width: 100px;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    z-index: 1;
    top: 140px;
    border-radius: 50%;
    background: #eb3223;
}
.head .nose::before{
    content: '';
    display: block;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 15px;
    left: 15px;
    border-radius: 50%;
    background: white;
}
.head .eye{
    border: 3px solid black;
    position: absolute;
    height: 140px;
    width: 140px;
    z-index: 1;
    background: white;
    left: 50%;
    margin-left: -70px;
    border-radius: 50%;
    top: 22px;
    overflow: hidden;
}
.head .eye.left{
    transform: translateX(-70px);
}
.head .eye.right{
    transform: translateX(70px);
}
.head .eye .eyeball{
    position: absolute;
    width: 60px;
    height: 100px;
    border: 10px solid black;
    background: white;
    border-radius: 50%;
    bottom: -10px;
}
.head .eye .eyeball.left{
    right: 20px;
}
.head .eye .eyeball.right{
    left: 20px;
}
.head .eye .eyeball::before{
    content: '';
    display: block;
    position: relative;
    height: 50px;
    width: 60px;
    margin-left: -10px;
    margin-top: 40px;
    background: white;
}
.head .nose .philtrum{
    position: absolute;
    border: 3px solid black;
    background: black;
    width: 0;
    height: 120px;
    left: 50%;
    margin-left: -3px;
    top: 95px;
}
.head .nose .philtrum .beard1.left{
    border: 2px solid black;
    width: 180px;
    position: absolute;
    top: 0px;
    transform: rotate(15deg);
}
.head .nose .philtrum .beard2.left{
    border: 2px solid black;
    width: 180px;
    position: absolute;
    top: 40px;
}
.head .nose .philtrum .beard3.left{
    border: 2px solid black;
    width: 180px;
    position: absolute;
    top: 80px;
    transform: rotate(-15deg);
}
.head .nose .philtrum .left{
    left: -220px;
}
.head .nose .philtrum .beard1.right{
    border: 2px solid black;
    width: 180px;
    position: absolute;
    top: 0px;
    transform: rotate(-15deg);
}
.head .nose .philtrum .beard2.right{
    border: 2px solid black;
    width: 180px;
    position: absolute;
    top: 40px;
}
.head .nose .philtrum .beard3.right{
    border: 2px solid black;
    width: 180px;
    position: absolute;
    top: 80px;
    transform: rotate(15deg);
}
.head .nose .philtrum .right{
    right: -220px;
}
.head .mouth{
    position: absolute;
    left: 50%;
    width: 540px;
    height: 270px;
    margin-left: -270px;
    bottom: 59px;
    overflow: hidden;
}
.head .mouth .up{
    position: absolute;
    border: 2px solid black;
    height: 0;
    width: 540px;
    bottom: 266px;
    z-index: 1;
}
.head .mouth .open{
    border: 4px solid black;
    position: absolute;
    bottom: 0;
    height: 540px;
    width: 540px;
    border-radius: 50%;
    background: #eb3223;
    overflow: hidden;
}
.head .mouth .tongue{
    height: 200px;
    width: 200px;
    position: absolute;
    left: 170px;
    bottom: -60px;
}
.head .mouth .tongue .left{
    width: 150px;
    height: 150px;
    background: #ee7747;
    transform: rotate(45deg) translateX(72px);
    position: absolute;
    bottom: 100px;
    left: -76px;
    border-radius: 50%;
}
.head .mouth .tongue .right{
    width: 150px;
    height: 150px;
    background: #ee7747;
    transform: rotate(45deg) translateY(72px);
    position: absolute;
    bottom: 100px;
    right: -76px;
    border-radius: 50%;
}
.head .mouth .tongue .bottom{
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    width: 150px;
    height: 150px;
    background: #ee7747;
    transform: rotate(45deg);
}
.head .necklace{
    position: absolute;
    border: 5px solid black;
    height: 50px;
    width: 480px;
    bottom: 5px;
    left: 50%;
    margin-left: -240px;
    background: #eb3323;
    border-radius: 40px 40px 40px 40px;
}
.head .necklace .bell{
    position: absolute;
    border: 3px solid black;
    background: #fffe54;
    height: 70px;
    width: 70px;
    bottom: -40px;
    left: 50%;
    margin-left: -35px;
    border-radius: 50%;
}
.head .necklace .bell .up{
    height: 10px;
    width: 70px;
    position: absolute;
    top: 12px;
    border-radius: 10px;
    left: 50%;
    margin-left: -35px;
    border: 3px solid black;
    background: #fffe54;
}
.head .necklace .bell .up .mid{
    position: absolute;
    border: 3px solid black;
    width: 20px;
    height: 20px;
    bottom: -23px;
    left: 50%;
    margin-left: -10px;
    border-radius: 50%;
    background: #808080;
}
.head .necklace .bell .up .mid .bottom{
    position: absolute;
    height: 23px;
    width: 0;
    left: 50%;
    margin-left: -2px;
    border: 2px solid black;
    bottom: -26px;
    background: black;
}
`;

export default string;