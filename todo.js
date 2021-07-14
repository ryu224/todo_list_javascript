const $addButton = document.getElementById('add-button');
const $toDoLists = document.getElementById('todolists');
const $newToDo = document.getElementById('new-todo');
const $rateElement = document.getElementById('rateElement');
let count = 0;

// 達成率計算の関数
function score (count) {
    const $listWhole = document.querySelectorAll('.checkbox-input').length;
    if ($listWhole>0) {
        rate = Math.round(count / $listWhole * 100);
        $rateElement.textContent = '達成率 : ' + rate + '%';
    }  
    else {
      $rateElement.textContent = '';
    }
} 

// リスト追加
$addButton.addEventListener('click',()=>{
    if($newToDo.value !== ""){
        addCode = '<div id="list" class="d-flex justify-content-between mt-4"><div class="ml-4"><label class="d-block"><input type="checkbox" class="checkbox-input"><span class="checkbox-parts">' + $newToDo.value + '</span></label></div><div class="mr-4"><i class="fas fa-trash-alt text-secondary trash"></i></div></div>';
        /* 挿入コード
        <div class="d-flex justify-content-between mt-4">
            <div class="ml-4">
                <label class="d-block">
                    <input type="checkbox" class="checkbox-input">
                    <span class="checkbox-parts"> $newtodo.value </span>
                </label>
            </div>
            <div class="mr-4">
                <i class="fas fa-trash-alt text-secondary trash"></i>
            </div>
        </div> 
        */
        $toDoLists.insertAdjacentHTML('beforeend', addCode); 
        $newToDo.value = "";

        score(count);

    }else{
        window.alert("TODOの内容が記入されていません");
    }
});
  

$toDoLists.addEventListener('click', (e) => {
    // ゴミ箱マークを押したとき
    if (e.target.classList.contains('trash')) {
        if(e.target.parentElement.classList.contains('checked')) {
            e.target.parentElement.parentElement.remove();
            count--;
            score(count);
        }
        else {
        e.target.parentElement.parentElement.remove();
        score(count);
        }
    }
    
    // チェックマークを押したとき
    if (e.target.classList.contains('checkbox-parts')) {
      const check = e.target.parentElement.parentElement.nextElementSibling;
      check.classList.toggle('checked');
      if(check.classList.contains('checked')) {
        count++;
        score(count);
      }
      else{
        count--;
        score(count);
      }
    }
}); 