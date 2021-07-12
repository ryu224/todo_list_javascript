const $toDoLists = document.getElementById('todolists');
const $addButton = document.getElementById('add-button');
const $newtodo = document.getElementById('new-todo');

// リスト追加
$addButton.addEventListener('click',()=>{
    if($newtodo.value !== ""){
        addCode = '<div id="list" class="d-flex justify-content-between mt-4"><div class="ml-4"><label class="d-block"><input type="checkbox" class="checkbox-input"><span class="checkbox-parts">' + $newtodo.value + '</span></label></div><div class="mr-4"><i class="fas fa-trash-alt text-secondary trash"></i></div></div>';
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
        $newtodo.value = "";
    }else{
            window.alert("TODOの内容が記入されていません");
    }
});

// リスト削除
$toDoLists.addEventListener('click', (e) => {
    if (e.target.classList.contains('trash')) {
        e.target.parentElement.parentElement.remove();
      }
});