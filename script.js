document.body.innerHTML = `
<H1 id="title"> Calculator </H1>
<p id="description"> Calculator Task </p>

<div class="formstyle">
    <form name="form1">

        <input id="result" type="text" name="answer"> <br> <br>
        <button type="button" id="1" value="1" onclick="form1.answer.value += '1' ">1</button>
        <button type="button" id="2" value="2" onclick="form1.answer.value += '2' ">2</button>
        <button type="button" id="3" value="3" onclick="form1.answer.value += '3' ">3</button>
        <button type="button" id="add" value="+" onclick="form1.answer.value += '+' ">+</button>
        <br> <br>

        <button type="button" id="4" value="4" onclick="form1.answer.value += '4' ">4</button>
        <button type="button" id="5" value="5" onclick="form1.answer.value += '5' ">5</button>
        <button type="button" id="6" value="6" onclick="form1.answer.value += '6' ">6</button>
        <button type="button" id="subtract" value="-" onclick="form1.answer.value += '-' ">-</button>
        <br> <br>

        <button type="button" id="7" value="7" onclick="form1.answer.value += '7' ">7</button>
        <button type="button" id="8" value="8" onclick="form1.answer.value += '8' ">8</button>
        <button type="button" id="9" value="9" onclick="form1.answer.value += '9' ">9</button>
        <button type="button" id="multiplication" value="*" onclick="form1.answer.value += '*' ">*</button>
        <br> <br>


        <button type="button" id="division" value="/" onclick="form1.answer.value += '/' ">/</button>
        <button type="button" value="0" onclick="form1.answer.value += '0' ">0</button>
        <button type="button" value="." onclick="form1.answer.value += '.' ">.</button>

        <button type="button" id="clear" value="C" onclick="form1.answer.value = ' ' ">C</button>
        <br>


        <button type="button" onclick="form1.answer.value = eval(form1.answer.value) " id="equal">=</button>
        <br>

    </form>
</div>
`;

