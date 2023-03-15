function printList(list) {
  let ens = list;

  while (ens) {
    alert(ens.value);
    ens = ens.next;
  }
}

function printList(list) {
  alert(list.value);
  if (list.next) {
    printList(list.next);
  }
}
// С рекурсией удобней для чтения, с циклом менее затратен на ресурсы памяти.