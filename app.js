const lessons = [
  {
    title: "Что вы вообще видите",
    nav: "Язык математики",
    tag: "Нулевая точка",
    intro: "Математическая запись — не шифр и не тест на память. Это короткое описание действий. На этом шаге научимся отличать число, пример, выражение, равенство и уравнение.",
    body: `
      <h2>Пять разных вещей</h2>
      <div class="concept-grid">
        <section class="concept-card"><h3>Число</h3><p>Просто количество. Оно ничего от вас не просит.</p><span class="math">7</span></section>
        <section class="concept-card"><h3>Пример</h3><p>Есть действия, можно получить один числовой ответ.</p><span class="math">7 + 3 · 2</span></section>
        <section class="concept-card"><h3>Выражение</h3><p>Запись с числами, буквами и действиями. Знака «равно» нет.</p><span class="math">5x + 4</span></section>
        <section class="concept-card"><h3>Уравнение</h3><p>Две записи объявлены равными. Нужно найти неизвестное.</p><span class="math">5x + 4 = 19</span></section>
      </div>
      <div class="rule-box"><p><b>Есть знак «=» и неизвестное?</b> Это уравнение. Нет «=»? Перед вами выражение: его можно посчитать при известном x или упростить, но нельзя «найти x» из воздуха.</p></div>
      <h2>Переводим значки на русский</h2>
      <div class="worked-example"><header>Читаем: 3x² + 5</header><ol class="work-steps">
        <li><span><b>x</b> — какое-то число, которого мы пока не знаем.</span></li>
        <li><span><b>x²</b> — это число умножили само на себя.</span></li>
        <li><span><b>3x²</b> — получившийся квадрат взяли три раза.</span></li>
        <li><span><b>+ 5</b> — к результату добавили пять.</span></li>
      </ol></div>
      <div class="plain-box"><p>Понимать выражение — не обязательно сразу решать его. Если вы можете рассказать словами, что оно делает, вы уже перестали видеть хаос.</p></div>
    `,
    exercises: [
      {q:"Что перед вами: 12 − 4 · 2?", a:["пример","числовой пример"], hint:"Неизвестной буквы и знака «=» нет.", solution:"Это пример: все числа известны, его можно посчитать."},
      {q:"Что перед вами: 4x + 7?", a:["выражение","алгебраическое выражение"], hint:"Знака равенства нет.", solution:"Это выражение. Найти x нельзя, пока не появится условие или знак «=»."},
      {q:"Что перед вами: 4x + 7 = 19?", a:["уравнение"], hint:"Есть неизвестное и две равные стороны.", solution:"Это уравнение."},
      {q:"Запишите без скрытого умножения: 6x", a:["6*x","6·x","6 x","6 умножить на x"], hint:"Число рядом с буквой означает умножение.", solution:"6x = 6 · x."}
    ]
  },
  {
    title: "Действия и порядок",
    nav: "Порядок действий",
    tag: "Основа",
    intro: "Большинство ошибок появляется не из-за сложной математики, а из-за того, что действия выполняют в случайном порядке. Здесь одно короткое правило.",
    body: `
      <h2>Очередь из четырёх этажей</h2>
      <div class="concept-grid">
        <section class="concept-card"><h3>1. Скобки</h3><p>Сначала всё, что заперто внутри.</p><span class="math">(8 − 3)</span></section>
        <section class="concept-card"><h3>2. Степени и корни</h3><p>Они тесно прикреплены к одному числу.</p><span class="math">4², √25</span></section>
        <section class="concept-card"><h3>3. Умножить / разделить</h3><p>Идём слева направо.</p><span class="math">3 · 5 ÷ 15</span></section>
        <section class="concept-card"><h3>4. Сложить / вычесть</h3><p>Тоже идём слева направо.</p><span class="math">12 + 4 − 3</span></section>
      </div>
      <div class="worked-example"><header>Решаем: 5 + 3 · 4²</header><ol class="work-steps">
        <li><span>Степень: 4² = 4 · 4 = 16.</span></li>
        <li><span>Умножение: 3 · 16 = 48.</span></li>
        <li><span>Сложение: 5 + 48 = <b>53</b>.</span></li>
      </ol></div>
      <div class="warning-box"><p><b>5 + 3 · 4 не равно 32.</b> Нельзя сначала сложить 5 + 3. Умножение стоит выше в очереди.</p></div>
      <h2>Минус — тоже действие</h2>
      <p>Запись <span class="math">10 − 3 − 2</span> читаем слева направо: сначала 10 − 3 = 7, затем 7 − 2 = 5.</p>
    `,
    exercises: [
      {q:"Посчитайте: 2 + 3 · 4", a:["14"], hint:"Сначала умножение.", solution:"3 · 4 = 12; затем 2 + 12 = 14."},
      {q:"Посчитайте: (2 + 3) · 4", a:["20"], hint:"Скобки первые.", solution:"2 + 3 = 5; затем 5 · 4 = 20."},
      {q:"Посчитайте: 18 ÷ 3 · 2", a:["12"], hint:"Деление и умножение равноправны — идите слева направо.", solution:"18 ÷ 3 = 6; 6 · 2 = 12."},
      {q:"Посчитайте: 20 − 6 − 4", a:["10"], hint:"Идите слева направо.", solution:"20 − 6 = 14; 14 − 4 = 10."}
    ]
  },
  {
    title: "Зачем нужен x",
    nav: "Буквы и неизвестное",
    tag: "Буквы — это числа",
    intro: "x — не особый предмет. Это коробка, в которой лежит число. Иногда число неизвестно, иногда мы сами подставляем его.",
    body: `
      <h2>Одна буква — одно и то же число</h2>
      <div class="equals-flow"><span class="math big">x = 4</span><span class="flow-arrow">→</span><span class="math big">3x + 2</span><span class="flow-arrow">→</span><span class="math big">3 · 4 + 2 = 14</span></div>
      <p>Если x = 4, то каждый x в этой записи заменяется четвёркой. Не один удобный x, а каждый.</p>
      <div class="rule-box"><p><b>2x</b> означает 2 · x. <b>xy</b> означает x · y. <b>x(x + 1)</b> означает x · (x + 1). Скрывается только знак умножения.</p></div>
      <h2>Переменная и неизвестное — две роли</h2>
      <div class="concept-grid">
        <section class="concept-card"><h3>Переменная</h3><p>x может принимать разные значения. Мы изучаем, как меняется результат.</p><span class="math">y = 2x + 1</span></section>
        <section class="concept-card"><h3>Неизвестное</h3><p>В конкретном уравнении спрятано одно подходящее число.</p><span class="math">2x + 1 = 9</span></section>
      </div>
      <div class="worked-example"><header>Подстановка: 2x² − x при x = 3</header><ol class="work-steps">
        <li><span>Заменяем каждый x: 2 · 3² − 3.</span></li>
        <li><span>Степень: 3² = 9.</span></li>
        <li><span>Умножение: 2 · 9 = 18.</span></li>
        <li><span>Вычитание: 18 − 3 = <b>15</b>.</span></li>
      </ol></div>
    `,
    exercises: [
      {q:"Если x = 5, чему равно 3x?", a:["15"], hint:"3x = 3 · x.", solution:"3 · 5 = 15."},
      {q:"Если x = 2, чему равно x² + 4?", a:["8"], hint:"Сначала замените x двойкой.", solution:"2² + 4 = 4 + 4 = 8."},
      {q:"Если a = 3 и b = 4, чему равно 2a + b?", a:["10"], hint:"2a = 2 · 3.", solution:"2 · 3 + 4 = 6 + 4 = 10."},
      {q:"Какое действие спрятано в записи 7(x + 2)?", a:["умножение","умножить","7 умножить на x+2"], hint:"Число стоит вплотную к скобкам.", solution:"Умножение: 7 · (x + 2)."}
    ]
  },
  {
    title: "Видеть конструкцию",
    nav: "Структура выражения",
    tag: "Главный навык",
    intro: "Длинный пример — это несколько маленьких блоков, вставленных друг в друга. Сначала смотрим снаружи, потом открываем каждый блок.",
    body: `
      <h2>Разрезаем по крупным действиям</h2>
      <div class="structure-demo">
        <div class="structure-root"><div class="block-chip root-chip">5x · 4² + 16 − 4x</div><div class="structure-line"></div></div>
        <div class="structure-branch"><div class="block-chip">5x · 4²</div><div class="block-chip">+ 16</div><div class="block-chip">− 4x</div></div>
      </div>
      <p>Сверху это сумма и разность трёх частей. Только первая часть открывается дальше: 5 · x · (4 · 4).</p>
      <div class="rule-box"><p>Задавайте один вопрос: <b>«Какое действие выполняется последним?»</b> Оно и есть главное действие всей конструкции.</p></div>
      <div class="reader-tool">
        <span class="eyebrow">Разборщик конструкции</span>
        <h3>Вставьте своё выражение</h3>
        <p>Например: 5x*4^2+16-4x или (3x+2)/5</p>
        <div class="tool-row"><input id="readerInput" value="5x*4^2+16-4x" aria-label="Выражение для разбора"><button id="readerButton" class="primary-button" type="button">Разобрать</button></div>
        <div id="readerOutput" class="reader-output" aria-live="polite"></div>
      </div>
      <h2>Черта дроби — большой разрез</h2>
      <p>В записи <span class="math big"><span class="fraction"><span>3x² + 6</span><span>2(x − 1)</span></span></span> главное действие — деление. Весь верх является одним блоком, весь низ — вторым.</p>
    `,
    exercises: [
      {q:"Какое главное действие в 3x² + 7?", a:["сложение","плюс","+"], hint:"Что делается последним со всем выражением?", solution:"Сложение: к блоку 3x² прибавляют 7."},
      {q:"Какое главное действие в (3x + 7) / 5?", a:["деление","разделить","/"], hint:"Весь верх делится на низ.", solution:"Деление. Скобки внутри числителя выполняются раньше."},
      {q:"На сколько крупных частей разбивается 8x² − 3x + 5?", a:["3","три"], hint:"Режьте по внешним плюсам и минусам.", solution:"На три: 8x²; −3x; +5."},
      {q:"Какое действие самое внутреннее в 4(x + 2)²?", a:["сложение","плюс","+"], hint:"Начните со скобок.", solution:"Сначала складываются x и 2; потом квадрат; потом умножение на 4."}
    ]
  },
  {
    title: "Степени и корни",
    nav: "Степени и корни",
    tag: "Повтор и обратный ход",
    intro: "Степень говорит, сколько одинаковых множителей взять. Корень задаёт обратный вопрос. Никакой мистики в маленьких цифрах и знаке √ нет.",
    body: `
      <h2>Степень — короткая запись повторения</h2>
      <div class="equals-flow"><span class="math big">3⁴</span><span class="flow-arrow">=</span><span class="math big">3 · 3 · 3 · 3</span><span class="flow-arrow">=</span><span class="math big">81</span></div>
      <div class="warning-box"><p>3⁴ — это <b>не</b> 3 · 4. Верхняя четвёрка считает, сколько троек перемножается.</p></div>
      <h2>Корень спрашивает дорогу назад</h2>
      <div class="concept-grid">
        <section class="concept-card"><h3>Квадрат</h3><p>7 идёт вперёд: 7 · 7 = 49.</p><span class="math">7² = 49</span></section>
        <section class="concept-card"><h3>Квадратный корень</h3><p>49 возвращается назад: что · на себя = 49?</p><span class="math">√49 = 7</span></section>
        <section class="concept-card"><h3>Куб</h3><p>Три одинаковых множителя.</p><span class="math">2³ = 2 · 2 · 2 = 8</span></section>
        <section class="concept-card"><h3>Кубический корень</h3><p>Что трижды умножить на себя, чтобы получить 8?</p><span class="math">∛8 = 2</span></section>
      </div>
      <div class="rule-box"><p>При умножении одинакового основания показатели складываются: x² · x³ = x⁵. Почему? Слева всего пять множителей x.</p></div>
      <div class="worked-example"><header>Почему √36 = 6, но x² = 36 имеет два ответа</header><ol class="work-steps">
        <li><span>Знак √36 по договорённости означает неотрицательный корень: 6.</span></li>
        <li><span>Но уравнение спрашивает про все x.</span></li>
        <li><span>6² = 36 и (−6)² = 36.</span></li>
        <li><span>Поэтому в уравнении x = 6 или x = −6.</span></li>
      </ol></div>
    `,
    exercises: [
      {q:"Посчитайте: 5²", a:["25"], hint:"5 · 5.", solution:"5² = 5 · 5 = 25."},
      {q:"Посчитайте: 2³", a:["8"], hint:"Три двойки перемножаются.", solution:"2 · 2 · 2 = 8."},
      {q:"Посчитайте: √81", a:["9"], hint:"Какое положительное число умножается само на себя и даёт 81?", solution:"9 · 9 = 81, поэтому √81 = 9."},
      {q:"Упростите: x² · x⁴", a:["x^6","x⁶"], hint:"Посчитайте все множители x.", solution:"Два x и ещё четыре x — всего шесть: x⁶."}
    ]
  },
  {
    title: "Дроби без паники",
    nav: "Дроби",
    tag: "Деление и части",
    intro: "Дробь — обычное деление. Верх показывает, что делим; низ — на сколько частей. С буквами смысл не меняется.",
    body: `
      <h2>Анатомия дроби</h2>
      <div class="concept-grid">
        <section class="concept-card"><h3>Числитель — сверху</h3><p>Сколько частей берём, или что именно делим.</p><span class="math"><span class="fraction"><span>3</span><span>4</span></span></span></section>
        <section class="concept-card"><h3>Знаменатель — снизу</h3><p>На сколько равных частей разделили. Ноль там стоять не может.</p><span class="math">3 ÷ 4 = 0,75</span></section>
      </div>
      <div class="rule-box"><p>Складывать дроби можно, когда кусочки одинакового размера. Поэтому нужен общий знаменатель.</p></div>
      <div class="worked-example"><header>Складываем 1/3 + 1/6</header><ol class="work-steps">
        <li><span>Треть и шестая — кусочки разного размера.</span></li>
        <li><span>Одну треть режем ещё пополам: 1/3 = 2/6.</span></li>
        <li><span>Теперь кусочки одинаковые: 2/6 + 1/6 = 3/6.</span></li>
        <li><span>3/6 — это половина, то есть <b>1/2</b>.</span></li>
      </ol></div>
      <h2>Сокращение — отмена одинаковых множителей</h2>
      <div class="equals-flow"><span class="math big"><span class="fraction"><span>6x</span><span>3</span></span></span><span class="flow-arrow">=</span><span class="math big"><span class="fraction"><span>3 · 2x</span><span>3</span></span></span><span class="flow-arrow">=</span><span class="math big">2x</span></div>
      <div class="warning-box"><p>В дроби (x + 3) / x нельзя «зачеркнуть x»: сверху x не множитель всего числителя, а только часть суммы.</p></div>
    `,
    exercises: [
      {q:"Сколько будет 3/4 в десятичной записи?", a:["0.75","0,75"], hint:"Разделите 3 на 4.", solution:"3 ÷ 4 = 0,75."},
      {q:"Сложите: 1/4 + 2/4", a:["3/4","0.75","0,75"], hint:"Знаменатели уже одинаковые.", solution:"Складываем числители: 1 + 2 = 3. Ответ 3/4."},
      {q:"Сложите: 1/2 + 1/4", a:["3/4","0.75","0,75"], hint:"1/2 = 2/4.", solution:"2/4 + 1/4 = 3/4."},
      {q:"Упростите: 12x / 4", a:["3x","3*x","3 x"], hint:"Разделите числовую часть 12 на 4.", solution:"12x / 4 = 3x."}
    ]
  },
  {
    title: "Одинаковые части",
    nav: "Подобные слагаемые",
    tag: "Упрощение",
    intro: "Упростить — значит собрать одинаковые предметы вместе. x, x² и обычное число — разные виды предметов.",
    body: `
      <h2>Коэффициент — сколько таких частей</h2>
      <p><span class="math big">7x = 7 · x</span> Число 7 называется коэффициентом. Оно говорит: «взяли семь одинаковых x».</p>
      <div class="concept-grid">
        <section class="concept-card"><h3>Можно собрать</h3><p>Форма букв полностью совпадает.</p><span class="math">5x + 3x = 8x</span></section>
        <section class="concept-card"><h3>Нельзя склеить</h3><p>x и x² — разные формы.</p><span class="math">5x + 3x²</span></section>
      </div>
      <div class="worked-example"><header>Упростим 14x · 6x − (3/25)x² − x³</header><ol class="work-steps">
        <li><span>Первое произведение: 14 · 6 = 84 и x · x = x².</span></li>
        <li><span>Получаем 84x² − (3/25)x² − x³.</span></li>
        <li><span>Первые два члена одного вида x²: (84 − 3/25)x².</span></li>
        <li><span>x³ другого вида и остаётся отдельно. Итог: (2097/25)x² − x³.</span></li>
      </ol></div>
      <div class="rule-box"><p>Сначала смотрите на буквенную часть. Если она одинакова до последней степени, работайте только с числами перед ней.</p></div>
    `,
    exercises: [
      {q:"Упростите: 5x + 7x", a:["12x","12*x","12 x"], hint:"Сложите количества одинаковых x.", solution:"5 + 7 = 12, значит 12x."},
      {q:"Упростите: 9x² − 4x²", a:["5x^2","5x²","5*x^2"], hint:"Буквенная часть x² одинакова.", solution:"(9 − 4)x² = 5x²."},
      {q:"Можно ли сложить 3x и 2x² в один член?", a:["нет","нельзя"], hint:"Сравните степени x.", solution:"Нет. x и x² — разные виды частей."},
      {q:"Упростите: 4x · 3x²", a:["12x^3","12x³","12*x^3"], hint:"Числа перемножьте, показатели степеней сложите.", solution:"4 · 3 = 12; x · x² = x³. Ответ 12x³."}
    ]
  },
  {
    title: "Уравнение — весы",
    nav: "Линейные уравнения",
    tag: "Ищем неизвестное",
    intro: "Уравнение утверждает: левая и правая стороны весят одинаково. Чтобы оставить x одного, делаем одно и то же с обеими сторонами.",
    body: `
      <h2>Не «переносим», а отменяем</h2>
      <div class="worked-example"><header>Решаем 5x + 10 = 30</header><ol class="work-steps">
        <li><span>Хотим оставить 5x. Лишние +10 отменяем действием −10.</span></li>
        <li><span>Вычитаем 10 с обеих сторон: 5x + 10 − 10 = 30 − 10.</span></li>
        <li><span>Получаем 5x = 20.</span></li>
        <li><span>Делим обе стороны на 5: x = <b>4</b>.</span></li>
      </ol></div>
      <div class="rule-box"><p>Разрешено прибавить, вычесть, умножить или разделить обе стороны на одно и то же число. Делить на ноль нельзя.</p></div>
      <h2>Проверка — ваш встроенный детектор ошибок</h2>
      <div class="equals-flow"><span class="math big">5x + 10 = 30</span><span class="flow-arrow">x = 4</span><span class="math big">5 · 4 + 10 = 30 ✓</span></div>
      <p>Подставили найденное число вместо x. Если обе стороны действительно равны, ответ подходит.</p>
      <div class="warning-box"><p>«Перенесли через равно и поменяли знак» — короткий школьный трюк. Понимание надёжнее: вы сделали одинаковое действие с обеими чашами весов.</p></div>
    `,
    exercises: [
      {q:"Решите: x + 7 = 12", a:["5","x=5"], hint:"Отмените +7 вычитанием 7 с обеих сторон.", solution:"x = 12 − 7 = 5."},
      {q:"Решите: 4x = 28", a:["7","x=7"], hint:"Разделите обе стороны на 4.", solution:"x = 28 ÷ 4 = 7."},
      {q:"Решите: 3x − 5 = 16", a:["7","x=7"], hint:"Сначала отмените −5, затем умножение на 3.", solution:"3x = 21; x = 7."},
      {q:"Проверьте: подходит ли x = 3 к уравнению 2x + 1 = 7?", a:["да","подходит","да подходит"], hint:"Подставьте 3 вместо x.", solution:"2 · 3 + 1 = 7. Да, подходит."}
    ]
  },
  {
    title: "Скобки и дроби в уравнениях",
    nav: "Сложные уравнения",
    tag: "Те же весы",
    intro: "Сложный вид не создаёт нового закона. Мы открываем по одному слою, как коробки, вложенные друг в друга.",
    body: `
      <h2>Скобки: число умножает каждый предмет внутри</h2>
      <div class="equals-flow"><span class="math big">3(x + 2)</span><span class="flow-arrow">=</span><span class="math big">3 · x + 3 · 2</span><span class="flow-arrow">=</span><span class="math big">3x + 6</span></div>
      <div class="worked-example"><header>Решаем 3(x + 2) = 21 коротким путём</header><ol class="work-steps">
        <li><span>Вся скобка умножена на 3. Отменяем это: делим обе стороны на 3.</span></li>
        <li><span>x + 2 = 7.</span></li>
        <li><span>Вычитаем 2 с обеих сторон: x = <b>5</b>.</span></li>
      </ol></div>
      <h2>Дробь: отменяем деление умножением</h2>
      <div class="worked-example"><header>Решаем (x + 4) / 3 = 6</header><ol class="work-steps">
        <li><span>Весь блок x + 4 делят на 3.</span></li>
        <li><span>Умножаем обе стороны на 3: x + 4 = 18.</span></li>
        <li><span>Вычитаем 4: x = <b>14</b>.</span></li>
      </ol></div>
      <div class="rule-box"><p>Идите в обратном порядке внешних действий. Если с x сначала сложили 4, а потом всё разделили на 3, отменяем сначала деление, затем сложение.</p></div>
    `,
    exercises: [
      {q:"Раскройте скобки: 2(x + 5)", a:["2x+10","2x + 10","2*x+10"], hint:"Двойка умножает и x, и 5.", solution:"2 · x + 2 · 5 = 2x + 10."},
      {q:"Решите: 2(x + 3) = 16", a:["5","x=5"], hint:"Сначала разделите обе стороны на 2.", solution:"x + 3 = 8; x = 5."},
      {q:"Решите: x/4 = 6", a:["24","x=24"], hint:"Отмените деление на 4 умножением на 4.", solution:"x = 6 · 4 = 24."},
      {q:"Решите: (x − 2)/5 = 3", a:["17","x=17"], hint:"Сначала умножьте обе стороны на 5.", solution:"x − 2 = 15; x = 17."}
    ]
  },
  {
    title: "Проценты и пропорции",
    nav: "Проценты",
    tag: "Математика покупок",
    intro: "Процент — сотая часть. 15% означает 15 частей из 100, то есть 0,15. Этого достаточно для скидок, наценок и сравнений.",
    body: `
      <h2>Три одинаковые записи</h2>
      <div class="equals-flow"><span class="math big">25%</span><span class="flow-arrow">=</span><span class="math big">25/100</span><span class="flow-arrow">=</span><span class="math big">0,25</span></div>
      <div class="worked-example"><header>Скидка 20% на товар за 1 500 ₽</header><ol class="work-steps">
        <li><span>20% превращаем в 0,20.</span></li>
        <li><span>Размер скидки: 1 500 · 0,20 = 300 ₽.</span></li>
        <li><span>Новая цена: 1 500 − 300 = <b>1 200 ₽</b>.</span></li>
      </ol></div>
      <h2>Пропорция — одинаковое отношение</h2>
      <p>Если 2 билета стоят 600 ₽, один билет стоит 600 ÷ 2 = 300 ₽. Тогда 5 билетов стоят 300 · 5 = 1 500 ₽. Часто это понятнее, чем механическое «умножение крест-накрест».</p>
      <div class="rule-box"><p>Чтобы найти p% от числа N: превратите p% в p/100 и умножьте на N. Сначала всегда спросите: «какую часть целого я ищу?»</p></div>
    `,
    exercises: [
      {q:"Сколько будет 10% от 800?", a:["80"], hint:"10% = 0,1.", solution:"800 · 0,1 = 80."},
      {q:"Товар 2 000 ₽ подешевел на 25%. Какова новая цена?", a:["1500","1 500","1500 ₽"], hint:"Сначала найдите четверть от 2 000.", solution:"25% от 2 000 = 500. Новая цена 1 500 ₽."},
      {q:"Число выросло со 100 до 120. На сколько процентов?", a:["20","20%"], hint:"Рост равен 20 от исходных 100.", solution:"20 / 100 = 0,2 = 20%."},
      {q:"3 одинаковые вещи стоят 900 ₽. Сколько стоят 5?", a:["1500","1 500","1500 ₽"], hint:"Сначала найдите цену одной вещи.", solution:"900 ÷ 3 = 300; 300 · 5 = 1 500 ₽."}
    ]
  },
  {
    title: "Квадратные уравнения без зубрёжки",
    nav: "Квадратные уравнения",
    tag: "До дискриминанта",
    intro: "Не каждое квадратное уравнение требует большой формулы. Сначала понимаем смысл: ищем числа, квадрат или произведение которых даёт нужный результат.",
    body: `
      <h2>Первый тип: квадрат уже один</h2>
      <div class="equals-flow"><span class="math big">x² = 25</span><span class="flow-arrow">→</span><span class="math big">x = 5 или x = −5</span></div>
      <p>Оба числа подходят, потому что минус на минус при умножении даёт плюс.</p>
      <h2>Второй тип: произведение равно нулю</h2>
      <div class="worked-example"><header>Решаем (x − 2)(x + 3) = 0</header><ol class="work-steps">
        <li><span>Два множителя дают ноль, если хотя бы один из них ноль.</span></li>
        <li><span>x − 2 = 0, значит x = 2.</span></li>
        <li><span>x + 3 = 0, значит x = −3.</span></li>
        <li><span>Ответ: <b>2 и −3</b>.</span></li>
      </ol></div>
      <div class="rule-box"><p>Если AB = 0, то A = 0 или B = 0. Это не отдельная магическая формула, а свойство нуля.</p></div>
      <h2>А если так не раскладывается?</h2>
      <p>Тогда позже используют выделение полного квадрата, график или формулу с дискриминантом. Но сначала полезно видеть саму конструкцию: x² создаёт параболу, а решения — места, где она пересекает ось x.</p>
      <div class="warning-box"><p>Из x² = 25 нельзя ответить только 5. В уравнении нужно проверить и −5. Но знак √25 сам по себе означает 5.</p></div>
    `,
    exercises: [
      {q:"Решите x² = 16. Запишите оба ответа через «и».", a:["4 и -4","-4 и 4","4,-4","-4,4","4; -4","-4; 4"], hint:"И положительное, и отрицательное число в квадрате дают 16.", solution:"x = 4 или x = −4."},
      {q:"Решите: (x − 7)(x + 1) = 0. Запишите ответы через «и».", a:["7 и -1","-1 и 7","7,-1","-1,7","7; -1","-1; 7"], hint:"Приравняйте каждый множитель к нулю.", solution:"x − 7 = 0 даёт 7; x + 1 = 0 даёт −1."},
      {q:"Сколько решений у x² = −9 среди обычных действительных чисел?", a:["0","ноль","нет","нет решений"], hint:"Квадрат любого положительного или отрицательного числа неотрицателен.", solution:"Ни одного. Обычный квадрат не может быть отрицательным."},
      {q:"Подходит ли x = −3 к уравнению x² = 9?", a:["да","подходит","да подходит"], hint:"Посчитайте (−3) · (−3).", solution:"Да: (−3)² = 9."}
    ]
  },
  {
    title: "Неравенства и промежутки",
    nav: "Неравенства",
    tag: "Не одно число, а область",
    intro: "Знаки > и < сравнивают величины. Ответом часто становится не одно число, а целый участок числовой прямой.",
    body: `
      <div class="concept-grid">
        <section class="concept-card"><h3>x &gt; 3</h3><p>Все числа правее тройки, но сама тройка не входит.</p><span class="math">4, 10, 3,1 …</span></section>
        <section class="concept-card"><h3>x ≥ 3</h3><p>То же самое, но тройка тоже разрешена.</p><span class="math">3, 4, 10 …</span></section>
      </div>
      <div class="worked-example"><header>Решаем 2x + 1 &lt; 9</header><ol class="work-steps">
        <li><span>Вычитаем 1 с обеих сторон: 2x &lt; 8.</span></li>
        <li><span>Делим обе стороны на 2: x &lt; 4.</span></li>
        <li><span>Подходят все числа меньше четырёх.</span></li>
      </ol></div>
      <div class="rule-box"><p>При умножении или делении неравенства на отрицательное число знак переворачивается. Например, −x &gt; 3 превращается в x &lt; −3.</p></div>
      <div class="warning-box"><p>Почему знак меняется? Если 2 &lt; 5, то после умножения на −1 получим −2 &gt; −5: на числовой прямой порядок зеркально перевернулся.</p></div>
    `,
    exercises: [
      {q:"Какое число больше: −2 или −7?", a:["-2","−2"], hint:"Правее на числовой прямой — больше.", solution:"−2 больше, потому что оно правее −7."},
      {q:"Решите: x + 3 > 8", a:["x>5","x > 5","больше 5"], hint:"Вычтите 3 с обеих сторон.", solution:"x > 5."},
      {q:"Решите: 2x ≤ 10", a:["x<=5","x≤5","x ≤ 5","не больше 5"], hint:"Разделите обе стороны на положительное число 2.", solution:"x ≤ 5."},
      {q:"Решите: −x > 4", a:["x<-4","x < -4","x<−4","x < −4"], hint:"Делим на −1 и переворачиваем знак.", solution:"x < −4."}
    ]
  },
  {
    title: "Что такое бесконечность",
    nav: "Бесконечность",
    tag: "Не число в конце дороги",
    intro: "∞ — не самое большое число. Это идея процесса без конца или величины без границы. Поэтому с бесконечностью нельзя обращаться как с обычной пятёркой.",
    body: `
      <div class="infinity-row"><div class="infinity-side"><b>1, 2, 3, 4…</b><p>Всегда можно прибавить ещё 1.</p></div><div class="infinity-symbol">∞</div><div class="infinity-side"><b>1, 1/2, 1/4…</b><p>Можно бесконечно приближаться к нулю.</p></div></div>
      <div class="rule-box"><p>У бесконечности нет «последнего числа». Какое бы огромное число вы ни назвали, число на единицу больше тоже существует.</p></div>
      <h2>Приближаться — не обязательно достигать</h2>
      <p>Возьмите расстояние 1 метр, затем половину остатка, затем ещё половину. Остаток становится 1/2, 1/4, 1/8… Он стремится к нулю. Запись «стремится» описывает направление процесса.</p>
      <div class="concept-grid">
        <section class="concept-card"><h3>Без границы</h3><p>x растёт: 10, 100, 1000… Пишут x → ∞.</p><span class="math">x → ∞</span></section>
        <section class="concept-card"><h3>Предел</h3><p>Результат подходит всё ближе к определённому числу.</p><span class="math">1/x → 0</span></section>
      </div>
      <h2>Почему нельзя просто писать ∞ − ∞ = 0</h2>
      <p>Два бесконечных процесса могут расти с разной скоростью. x − x всегда 0, а 2x − x = x растёт без границы. В обоих случаях вид «бесконечность минус бесконечность», но результаты разные.</p>
      <div class="warning-box"><p>Деление на ноль не равно бесконечности. Выражение 1/0 не определено: обычное деление здесь ломается. Но при приближении знаменателя к нулю значения могут расти без границы.</p></div>
    `,
    exercises: [
      {q:"Есть ли самое большое целое число?", a:["нет","не существует","нет не существует"], hint:"К любому числу можно прибавить 1.", solution:"Нет. Для любого N существует N + 1."},
      {q:"К чему приближается 1/x, когда x растёт: 10, 100, 1000…?", a:["0","к нулю","ноль"], hint:"1/10 = 0,1; 1/100 = 0,01.", solution:"К нулю, хотя при конечном x дробь не становится ровно нулём."},
      {q:"Является ли ∞ обычным числом?", a:["нет"], hint:"Это обозначение поведения без границы.", solution:"Нет. Это идея неограниченного роста или бесконечного процесса."},
      {q:"Можно ли делить обычное число на ноль?", a:["нет","нельзя"], hint:"Какое число при умножении на 0 вернёт исходное ненулевое число?", solution:"Нет. Деление на ноль не определено."}
    ]
  },
  {
    title: "График — все ответы на рисунке",
    nav: "Координаты и графики",
    tag: "От записи к картинке",
    intro: "Функция берёт x, выполняет действия и выдаёт y. График показывает сразу все пары «вход → результат».",
    body: `
      <h2>Точка — это адрес</h2>
      <div class="concept-grid">
        <section class="concept-card"><h3>Ось x</h3><p>Горизонталь. Сначала идём вправо или влево.</p><span class="math">x = 3</span></section>
        <section class="concept-card"><h3>Ось y</h3><p>Вертикаль. Потом идём вверх или вниз.</p><span class="math">y = 7</span></section>
      </div>
      <p>Точка (3; 7) означает: от центра на 3 вправо и на 7 вверх. Порядок всегда x, потом y.</p>
      <h2>Как построить любой доступный график</h2>
      <div class="worked-example"><header>Строим y = 2x + 1</header><ol class="work-steps">
        <li><span>Выбираем простые x: −2, −1, 0, 1, 2.</span></li>
        <li><span>Для каждого считаем y. При x = 0: y = 2 · 0 + 1 = 1.</span></li>
        <li><span>Получаем точки: (−2; −3), (−1; −1), (0; 1), (1; 3), (2; 5).</span></li>
        <li><span>Ставим точки и соединяем. Получается прямая.</span></li>
      </ol></div>
      <div class="rule-box"><p>График не вычисляют одним прыжком. Делают таблицу: выбрали x → подставили → получили y → поставили точку.</p></div>
      <h2>Что форма говорит без вычислений</h2>
      <ul>
        <li><b>y = kx + b</b> — прямая. k задаёт наклон, b — высоту пересечения с осью y.</li>
        <li><b>y = x²</b> — U‑образная парабола.</li>
        <li><b>y = |x|</b> — угол в форме V; расстояние до нуля не бывает отрицательным.</li>
        <li><b>y = 1/x</b> — две ветви, которые приближаются к осям, но не касаются их.</li>
      </ul>
    `,
    exercises: [
      {q:"В точке (4; −2) чему равен x?", a:["4","x=4"], hint:"Координаты записываются x, затем y.", solution:"x = 4."},
      {q:"Для y = 2x + 1 найдите y при x = 3.", a:["7","y=7"], hint:"Подставьте 3 вместо x.", solution:"y = 2 · 3 + 1 = 7."},
      {q:"Через какую точку на оси y проходит y = 3x + 2? Запишите (x;y).", a:["(0;2)","0;2","(0,2)"], hint:"На оси y всегда x = 0.", solution:"При x = 0 получаем y = 2. Точка (0; 2)."},
      {q:"Какую форму имеет график y = x²?", a:["парабола","u","u-образная","u образная"], hint:"Он симметричен и открыт вверх.", solution:"Парабола, похожая на букву U."}
    ]
  },
  {
    title: "Лаборатория графиков",
    nav: "Графический тренажёр",
    tag: "Двигайте и наблюдайте",
    intro: "Меняйте вид функции и числа. Таблица показывает расчёт, а рисунок — все точки вместе. Так формула превращается в движение и форму.",
    body: `
      <div class="graph-lab">
        <div class="graph-controls">
          <div class="control"><label for="graphType">Вид</label><select id="graphType"><option value="line">Прямая</option><option value="quad">Парабола</option><option value="abs">Модуль</option><option value="reciprocal">Обратная</option></select></div>
          <div class="control"><label for="coefA">a</label><input id="coefA" type="number" value="1" step="0.5"></div>
          <div class="control"><label for="coefB">b</label><input id="coefB" type="number" value="0" step="0.5"></div>
          <div class="control"><label for="coefC">c</label><input id="coefC" type="number" value="0" step="0.5"></div>
        </div>
        <p class="graph-equation" id="graphEquation">y = x</p>
        <div class="graph-wrap">
          <div class="canvas-wrap"><canvas id="graphCanvas" aria-label="Интерактивный график"></canvas></div>
          <div><table class="value-table"><thead><tr><th>x</th><th>y</th></tr></thead><tbody id="valueTable"></tbody></table></div>
        </div>
      </div>
      <h2>Как читать изменения</h2>
      <div class="concept-grid">
        <section class="concept-card"><h3>У прямой</h3><p>a меняет наклон. b двигает всю прямую вверх или вниз.</p></section>
        <section class="concept-card"><h3>У параболы</h3><p>a переворачивает и сжимает чашу; b двигает вершину по горизонтали; c — по вертикали.</p></section>
      </div>
      <div class="rule-box"><p>Решить уравнение f(x) = 0 на графике — значит найти места, где линия пересекает горизонтальную ось x. Координаты x этих точек и будут решениями.</p></div>
      <h2>Ваш универсальный алгоритм дальше</h2>
      <ol>
        <li>Назовите тип записи: пример, выражение, уравнение, неравенство или функция.</li>
        <li>Найдите главное внешнее действие.</li>
        <li>Разрежьте запись на крупные блоки.</li>
        <li>Переведите каждый блок на обычные слова.</li>
        <li>Действуйте по одному слою и записывайте каждый переход.</li>
        <li>Проверьте ответ подстановкой, оценкой или графиком.</li>
      </ol>
    `,
    exercises: [
      {q:"Для y = x² найдите y при x = −3.", a:["9","y=9"], hint:"(−3) · (−3) = ?", solution:"y = (−3)² = 9."},
      {q:"У прямой y = 2x + 5 какое число задаёт пересечение с осью y?", a:["5","b=5"], hint:"При x = 0 останется только одно число.", solution:"Число 5: точка пересечения (0; 5)."},
      {q:"График пересёк ось x в точке x = 4. Чему равно f(4)?", a:["0","f(4)=0"], hint:"На горизонтальной оси координата y равна нулю.", solution:"f(4) = 0."},
      {q:"Что нужно сделать первым при построении графика по формуле?", a:["выбрать x","выбрать значения x","составить таблицу","таблица"], hint:"Нужны входные значения.", solution:"Выбрать несколько удобных x и составить таблицу значений."}
    ]
  }
];

const state = {
  current: Number(localStorage.getItem("math-course-current") || 0),
  completed: new Set(JSON.parse(localStorage.getItem("math-course-completed") || "[]")),
  solved: new Set(JSON.parse(localStorage.getItem("math-course-solved") || "[]")),
  exercise: 0,
  largeText: localStorage.getItem("math-course-large") === "1"
};

if (!Number.isInteger(state.current) || state.current < 0 || state.current >= lessons.length) state.current = 0;
if (state.largeText) document.body.classList.add("large-text");

const nav = document.getElementById("courseNav");
const lessonEl = document.getElementById("lesson");
const crumb = document.getElementById("crumb");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

function saveState() {
  localStorage.setItem("math-course-current", String(state.current));
  localStorage.setItem("math-course-completed", JSON.stringify([...state.completed]));
  localStorage.setItem("math-course-solved", JSON.stringify([...state.solved]));
}

function renderNav() {
  nav.innerHTML = lessons.map((lesson, i) => `
    <button class="nav-item ${i === state.current ? "active" : ""} ${state.completed.has(i) ? "done" : ""}" data-index="${i}" type="button">
      <span class="nav-num">${String(i + 1).padStart(2, "0")}</span>
      <span class="nav-title">${lesson.nav}</span>
      <span class="nav-check">✓</span>
    </button>`).join("");
  nav.querySelectorAll(".nav-item").forEach(button => button.addEventListener("click", () => goTo(Number(button.dataset.index))));
  updateProgress();
}

function updateProgress() {
  const pct = Math.round((state.completed.size / lessons.length) * 100);
  document.getElementById("progressLabel").textContent = `${pct}%`;
  document.getElementById("progressBar").style.width = `${pct}%`;
  document.getElementById("progressDetail").textContent = state.completed.size
    ? `${state.completed.size} из ${lessons.length} шагов пройдено`
    : "Начните с первого шага";
}

function renderLesson() {
  const lesson = lessons[state.current];
  crumb.textContent = `Шаг ${state.current + 1} из ${lessons.length}`;
  document.title = `${lesson.nav} — Математика без страха`;
  lessonEl.innerHTML = `
    <span class="eyebrow">${lesson.tag}</span>
    <h1>${lesson.title}</h1>
    <p class="lead">${lesson.intro}</p>
    ${lesson.body}
    <section class="practice">
      <div class="practice-head"><div><span class="eyebrow">Самостоятельно</span><h2>Теперь вы</h2></div><span id="exerciseCounter"></span></div>
      <div id="exerciseCard" class="exercise-card"></div>
    </section>`;
  state.exercise = 0;
  renderExercise();
  prevButton.disabled = state.current === 0;
  nextButton.textContent = state.current === lessons.length - 1 ? "Завершить курс ✓" : "Следующий шаг →";
  renderNav();
  initReader();
  initGraph();
}

function renderExercise() {
  const items = lessons[state.current].exercises;
  const ex = items[state.exercise];
  const key = `${state.current}-${state.exercise}`;
  document.getElementById("exerciseCounter").textContent = `${state.exercise + 1} / ${items.length}`;
  document.getElementById("exerciseCard").innerHTML = `
    <div class="exercise-meta"><span>Задание ${state.exercise + 1}</span><span>${state.solved.has(key) ? "Уже решено ✓" : "Можно ошибаться"}</span></div>
    <p class="exercise-question">${ex.q}</p>
    <div class="answer-row"><input id="answerInput" autocomplete="off" placeholder="Ваш ответ" aria-label="Ответ"><button id="checkAnswer" class="primary-button" type="button">Проверить</button></div>
    <div id="feedback" class="feedback" aria-live="polite"></div>
    <div class="exercise-actions"><button id="hintButton" class="text-button" type="button">Подсказка</button><button id="solutionButton" class="text-button" type="button">Показать решение</button><button id="nextExercise" class="text-button" type="button">Другое задание →</button></div>
    <div id="hint" class="hint"><b>Подсказка:</b> ${ex.hint}</div>
    <div id="solution" class="solution"><b>Разбор:</b> ${ex.solution}</div>`;

  const input = document.getElementById("answerInput");
  const check = () => checkAnswer(ex, input.value, key);
  document.getElementById("checkAnswer").addEventListener("click", check);
  input.addEventListener("keydown", event => { if (event.key === "Enter") check(); });
  document.getElementById("hintButton").addEventListener("click", () => document.getElementById("hint").classList.toggle("show"));
  document.getElementById("solutionButton").addEventListener("click", () => document.getElementById("solution").classList.toggle("show"));
  document.getElementById("nextExercise").addEventListener("click", () => {
    state.exercise = (state.exercise + 1) % items.length;
    renderExercise();
  });
}

function normalize(value) {
  return value.toLowerCase().trim().replaceAll("−", "-").replaceAll("×", "*").replaceAll("·", "*").replace(/\s+/g, " ").replace(/^x\s*=\s*/, "x=").replace(/^y\s*=\s*/, "y=");
}

function checkAnswer(ex, raw, key) {
  const feedback = document.getElementById("feedback");
  if (!raw.trim()) {
    feedback.className = "feedback bad";
    feedback.textContent = "Сначала введите ответ. Даже предположение полезно.";
    return;
  }
  const candidate = normalize(raw);
  const ok = ex.a.some(answer => normalize(answer) === candidate);
  if (ok) {
    feedback.className = "feedback good";
    feedback.textContent = "Верно. Вы разобрали этот слой ✓";
    state.solved.add(key);
    const solvedHere = lessons[state.current].exercises.filter((_, i) => state.solved.has(`${state.current}-${i}`)).length;
    if (solvedHere >= 2) state.completed.add(state.current);
    saveState();
    renderNav();
  } else {
    feedback.className = "feedback bad";
    feedback.textContent = "Пока не сходится. Откройте подсказку и сделайте один следующий шаг.";
  }
}

function goTo(index) {
  state.current = Math.max(0, Math.min(lessons.length - 1, index));
  saveState();
  renderLesson();
  closeNav();
  window.scrollTo({top: 0, behavior: "smooth"});
  setTimeout(() => lessonEl.focus({preventScroll: true}), 50);
}

function topLevelParts(source) {
  let depth = 0;
  let start = 0;
  const parts = [];
  for (let i = 0; i < source.length; i++) {
    const ch = source[i];
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (depth === 0 && (ch === "+" || (ch === "-" && i > 0))) {
      parts.push(source.slice(start, i).trim());
      start = i;
    }
  }
  parts.push(source.slice(start).trim());
  return parts.filter(Boolean);
}

function describeExpression(source) {
  const clean = source.trim().replaceAll(" ", "");
  if (!clean) return {title:"Введите выражение.", parts:[]};
  if (!/^[0-9a-zA-Zа-яА-ЯёЁ+\-*/^().=,]+$/.test(clean)) return {title:"Здесь есть непонятный символ. Используйте числа, буквы, скобки и знаки + − * / ^ =.", parts:[]};
  let depth = 0;
  for (const ch of clean) { if (ch === "(") depth++; if (ch === ")") depth--; if (depth < 0) break; }
  if (depth !== 0) return {title:"Проверьте скобки: каждой открывающей нужна закрывающая.", parts:[]};
  const eq = clean.indexOf("=");
  if (eq > 0) return {title:"Главная конструкция — уравнение: две равные стороны.", parts:[clean.slice(0,eq), "= " + clean.slice(eq+1)]};
  const parts = topLevelParts(clean);
  if (parts.length > 1) return {title:`Снаружи это сумма или разность ${parts.length} крупных частей.`, parts};
  let slash = -1; depth = 0;
  for (let i=0;i<clean.length;i++) { if(clean[i]==="(") depth++; else if(clean[i]===")") depth--; else if(clean[i]==="/" && depth===0) slash=i; }
  if (slash > 0) return {title:"Главное действие — деление. Слева числитель, справа знаменатель.", parts:[clean.slice(0,slash), "÷ " + clean.slice(slash+1)]};
  if (clean.includes("*") || /\d[a-zA-Zа-яА-ЯёЁ(]/.test(clean)) return {title:"Главное действие — умножение множителей.", parts:clean.split("*").filter(Boolean)};
  if (clean.includes("^")) return {title:"Главная конструкция — степень.", parts:clean.split("^")};
  return {title:"Это один простой блок. Попробуйте назвать, что означает каждый символ.", parts:[clean]};
}

function initReader() {
  const button = document.getElementById("readerButton");
  const input = document.getElementById("readerInput");
  if (!button || !input) return;
  const run = () => {
    const result = describeExpression(input.value);
    document.getElementById("readerOutput").innerHTML = `<b>${result.title}</b>${result.parts.length ? `<div class="reader-parts">${result.parts.map(p => `<span class="reader-part">${escapeHtml(p)}</span>`).join("")}</div>` : ""}`;
  };
  button.addEventListener("click", run);
  input.addEventListener("keydown", e => { if (e.key === "Enter") run(); });
  run();
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[ch]);
}

function initGraph() {
  const canvas = document.getElementById("graphCanvas");
  if (!canvas) return;
  const type = document.getElementById("graphType");
  const inputs = ["coefA", "coefB", "coefC"].map(id => document.getElementById(id));
  const draw = () => drawGraph(canvas, type.value, ...inputs.map(input => Number(input.value) || 0));
  type.addEventListener("change", draw);
  inputs.forEach(input => input.addEventListener("input", draw));
  window.addEventListener("resize", draw, {passive:true});
  draw();
}

function graphFunction(type, a, b, c, x) {
  if (type === "line") return a * x + b;
  if (type === "quad") return a * (x - b) ** 2 + c;
  if (type === "abs") return a * Math.abs(x - b) + c;
  return x === b ? NaN : a / (x - b) + c;
}

function equationLabel(type, a, b, c) {
  const n = value => Number(value.toFixed(2)).toString().replace("-", "−");
  if (type === "line") return `y = ${n(a)}x ${b >= 0 ? "+" : "−"} ${n(Math.abs(b))}`;
  if (type === "quad") return `y = ${n(a)}(x ${b >= 0 ? "−" : "+"} ${n(Math.abs(b))})² ${c >= 0 ? "+" : "−"} ${n(Math.abs(c))}`;
  if (type === "abs") return `y = ${n(a)}|x ${b >= 0 ? "−" : "+"} ${n(Math.abs(b))}| ${c >= 0 ? "+" : "−"} ${n(Math.abs(c))}`;
  return `y = ${n(a)}/(x ${b >= 0 ? "−" : "+"} ${n(Math.abs(b))}) ${c >= 0 ? "+" : "−"} ${n(Math.abs(c))}`;
}

function drawGraph(canvas, type, a, b, c) {
  const rect = canvas.getBoundingClientRect();
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(rect.width * ratio);
  canvas.height = Math.round(rect.height * ratio);
  const ctx = canvas.getContext("2d");
  ctx.scale(ratio, ratio);
  const w = rect.width, h = rect.height;
  const scale = Math.min(w, h) / 12;
  const ox = w / 2, oy = h / 2;
  ctx.clearRect(0, 0, w, h);
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(166,196,226,.10)";
  for (let x = ox % scale; x < w; x += scale) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,h); ctx.stroke(); }
  for (let y = oy % scale; y < h; y += scale) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(w,y); ctx.stroke(); }
  ctx.strokeStyle = "rgba(220,236,255,.42)";
  ctx.lineWidth = 1.4;
  ctx.beginPath(); ctx.moveTo(0,oy); ctx.lineTo(w,oy); ctx.moveTo(ox,0); ctx.lineTo(ox,h); ctx.stroke();
  ctx.fillStyle = "#8da5bd";
  ctx.font = "12px system-ui";
  ctx.textAlign = "center";
  for (let i=-5;i<=5;i++) if(i!==0) ctx.fillText(String(i), ox+i*scale, oy+16);
  ctx.textAlign = "right";
  for (let i=-5;i<=5;i++) if(i!==0) ctx.fillText(String(-i), ox-7, oy+i*scale+4);
  ctx.strokeStyle = "#69e5cd";
  ctx.lineWidth = 3;
  ctx.lineJoin = "round";
  ctx.beginPath();
  let drawing = false;
  for (let px=0; px<=w; px+=1) {
    const x = (px-ox)/scale;
    const y = graphFunction(type,a,b,c,x);
    const py = oy-y*scale;
    const visible = Number.isFinite(py) && py > -h*2 && py < h*3;
    if (!visible) { drawing=false; continue; }
    if (!drawing) { ctx.moveTo(px,py); drawing=true; } else ctx.lineTo(px,py);
  }
  ctx.stroke();
  document.getElementById("graphEquation").textContent = equationLabel(type,a,b,c);
  document.getElementById("valueTable").innerHTML = [-2,-1,0,1,2].map(x => {
    const y = graphFunction(type,a,b,c,x);
    return `<tr><td>${x}</td><td>${Number.isFinite(y) ? Number(y.toFixed(3)).toString().replace("-","−") : "нет"}</td></tr>`;
  }).join("");
}

function closeNav() {
  document.body.classList.remove("nav-open");
  document.getElementById("menuButton").setAttribute("aria-expanded", "false");
}

prevButton.addEventListener("click", () => goTo(state.current - 1));
nextButton.addEventListener("click", () => {
  state.completed.add(state.current);
  saveState();
  if (state.current < lessons.length - 1) goTo(state.current + 1);
  else {
    renderNav();
    nextButton.textContent = "Курс пройден ✓";
    nextButton.disabled = true;
    window.scrollTo({top:0,behavior:"smooth"});
  }
});
document.getElementById("menuButton").addEventListener("click", () => {
  const open = document.body.classList.toggle("nav-open");
  document.getElementById("menuButton").setAttribute("aria-expanded", String(open));
});
document.getElementById("scrim").addEventListener("click", closeNav);
document.getElementById("rulesButton").addEventListener("click", () => document.getElementById("rulesDialog").showModal());
document.getElementById("fontButton").addEventListener("click", () => {
  state.largeText = !state.largeText;
  document.body.classList.toggle("large-text", state.largeText);
  localStorage.setItem("math-course-large", state.largeText ? "1" : "0");
});
document.getElementById("resetProgress").addEventListener("click", () => {
  if (!confirm("Сбросить отмеченные шаги и решённые задания?")) return;
  state.completed.clear();
  state.solved.clear();
  state.current = 0;
  saveState();
  goTo(0);
});

renderLesson();
