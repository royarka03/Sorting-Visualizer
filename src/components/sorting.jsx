//BUBBLE SORT

function bubbleSort(arr, bars, resetNums) {
  let c = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      setTimeout(() => {
        bars[j].style.backgroundColor = "red";
        bars[j + 1].style.backgroundColor = "red";
      }, c * 1);
      c++;
      setTimeout(() => {
        if (arr[j] > arr[j + 1]) {
          let t = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = t;
          bars[j].style.height = `${arr[j]}px`;
          bars[j + 1].style.height = `${arr[j + 1]}px`;
        }
        bars[j].style.backgroundColor = "#5B8FB9";
        bars[j + 1].style.backgroundColor = "#5B8FB9";
      }, c * 1);
      c++;
    }
    let index = arr.length - i - 1;
    setTimeout(() => {
      bars[index].style.backgroundColor = "white";
    }, c * 1);
    c += 50;
    setTimeout(() => {
      bars[index].style.backgroundColor = "#5B8FB9";
    }, c * 1);
  }
  resetNums(arr);
  return c;
}

//SELECTION SORT

function selectionSort(arr, bars, resetNums) {
  let c = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let pos = i;
    for (let j = i + 1; j < arr.length; j++) {
      setTimeout(() => {
        bars[j].style.backgroundColor = "red";
        bars[pos].style.backgroundColor = "red";
      }, c * 1);
      c++;
      setTimeout(() => {
        bars[j].style.backgroundColor = "#5B8FB9";
        bars[pos].style.backgroundColor = "#5B8FB9";
        if (arr[j] < arr[pos]) {
          pos = j;
        }
      }, c * 1);
      c++;
    }
    c++;
    setTimeout(() => {
      let t = arr[i];
      arr[i] = arr[pos];
      arr[pos] = t;
      bars[i].style.height = `${arr[i]}px`;
      bars[pos].style.height = `${arr[pos]}px`;
      bars[i].style.backgroundColor = "white";
      bars[pos].style.backgroundColor = "#5B8FB9";
    }, c * 1);
    c += 50;
    setTimeout(() => {
      bars[i].style.backgroundColor = "#5B8FB9";
    }, c * 1);
  }
  resetNums(arr);
  return c;
}

//INSERTION SORT

function insertionSort(arr, bars, resetNums) {
  let c = 0,
    newArr = [];
  for (let i = 0; i < arr.length; i++) newArr.push(arr[i]);
  for (let i = 1; i < newArr.length; i++) {
    let j = i;
    while (j >= 1 && newArr[j] < newArr[j - 1]) {
      (function (j, bars) {
        setTimeout(() => {
          bars[j].style.backgroundColor = "red";
          bars[j - 1].style.backgroundColor = "red";
        }, c * 1);
      })(j, bars);
      c++;
      (function (j, bars, val1, val2) {
        setTimeout(() => {
          bars[j].style.height = `${val1}px`;
          bars[j - 1].style.height = `${val2}px`;
        }, c * 1);
      })(j, bars, newArr[j - 1], newArr[j]);
      let t = newArr[j];
      newArr[j] = newArr[j - 1];
      newArr[j - 1] = t;
      c++;
      (function (j, bars) {
        setTimeout(() => {
          bars[j].style.backgroundColor = "#5B8FB9";
          bars[j - 1].style.backgroundColor = "#5B8FB9";
        }, c * 1);
      })(j, bars);
      j--;
    }
    c++;
    (function (j, bars) {
      setTimeout(() => {
        bars[j].style.backgroundColor = "white";
      }, c * 1);
    })(j, bars);
    c += 50;
    (function (j, bars) {
      setTimeout(() => {
        bars[j].style.backgroundColor = "#5B8FB9";
      }, c * 1);
    })(j, bars);
  }
  setTimeout(() => {
    resetNums(newArr);
  }, c * 1);
  return c;
}

//MERGE SORT

function mergeSort(arr, bars, resetNums) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) newArr.push(arr[i]);
  let c = mergeSortHelper(newArr, bars, 0, arr.length - 1, 0);
  setTimeout(() => {
    resetNums(newArr);
  }, c * 1);
  return c;
}

function merge(arr, bars, lb, mid, ub, c) {
  let arr1 = [],
    arr2 = [],
    k = 0;
  for (let i = lb; i <= mid; i++) arr1.push(arr[i]);
  k = 0;
  for (let i = mid + 1; i <= ub; i++) arr2.push(arr[i]);
  let i = 0,
    j = 0;
  k = lb;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr[k] = arr1[i];
      (function (k, bars, val) {
        setTimeout(() => {
          bars[k].style.height = `${val}px`;
        }, c * 1);
      })(k, bars, arr1[i]);
      i++;
      k++;
    } else {
      arr[k] = arr2[j];
      (function (k, bars, val) {
        setTimeout(() => {
          bars[k].style.height = `${val}px`;
        }, c * 1);
      })(k, bars, arr2[j]);
      j++;
      k++;
    }
    c++;
    (function (k, bars) {
      setTimeout(() => {
        bars[k - 1].style.backgroundColor = "white";
      }, c * 1);
    })(k, bars);
    c += 20;
    (function (k, bars) {
      setTimeout(() => {
        bars[k - 1].style.backgroundColor = "#5B8FB9";
      }, c * 1);
    })(k, bars);
  }
  while (i < arr1.length) {
    arr[k] = arr1[i];
    (function (k, bars, val) {
      setTimeout(() => {
        bars[k].style.height = `${val}px`;
      }, c * 1);
    })(k, bars, arr1[i]);
    k++;
    i++;
    c++;
    (function (k, bars) {
      setTimeout(() => {
        bars[k - 1].style.backgroundColor = "white";
      }, c * 1);
    })(k, bars);
    c += 20;
    (function (k, bars) {
      setTimeout(() => {
        bars[k - 1].style.backgroundColor = "#5B8FB9";
      }, c * 1);
    })(k, bars);
  }
  while (j < arr2.length) {
    arr[k] = arr2[j];
    (function (k, bars, val) {
      setTimeout(() => {
        bars[k].style.height = `${val}px`;
      }, c * 1);
    })(k, bars, arr2[j]);
    k++;
    j++;
    c++;
    (function (k, bars) {
      setTimeout(() => {
        bars[k - 1].style.backgroundColor = "white";
      }, c * 1);
    })(k, bars);
    c += 20;
    (function (k, bars) {
      setTimeout(() => {
        bars[k - 1].style.backgroundColor = "#5B8FB9";
      }, c * 1);
    })(k, bars);
  }
  return c;
}

function mergeSortHelper(arr, bars, lb, ub, c) {
  if (lb >= ub) return c;
  let mid = Math.floor((lb + ub) / 2);
  c = mergeSortHelper(arr, bars, lb, mid, c);
  c = mergeSortHelper(arr, bars, mid + 1, ub, c);
  c = merge(arr, bars, lb, mid, ub, c);
  return c;
}

//QUICK SORT

function quickSort(arr, bars, resetNums) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) newArr.push(arr[i]);
  let c = quickSortHelper(newArr, 0, newArr.length - 1, bars, 0);
  setTimeout(() => {
    resetNums(newArr);
  }, c * 1);
  return c;
}

function partition(arr, start, end, bars, c) {
  let i = start,
    j = end,
    pivot = arr[start];
  while (i < j) {
    while (i < end && arr[i] <= pivot) {
      (function (i, bars) {
        setTimeout(() => {
          bars[i].style.backgroundColor = "white";
        }, c * 1);
      })(i, bars);
      c++;
      (function (i, bars) {
        setTimeout(() => {
          bars[i].style.backgroundColor = "#5B8FB9";
        }, c * 1);
      })(i, bars);
      c++;
      i++;
    }
    while (j > start && arr[j] >= pivot) {
      (function (j, bars) {
        setTimeout(() => {
          bars[j].style.backgroundColor = "white";
        }, c * 1);
      })(j, bars);
      c++;
      (function (j, bars) {
        setTimeout(() => {
          bars[j].style.backgroundColor = "#5B8FB9";
        }, c * 1);
      })(j, bars);
      c++;
      j--;
    }
    if (i < j) {
      (function (i, j, bars) {
        setTimeout(() => {
          bars[i].style.backgroundColor = "red";
          bars[j].style.backgroundColor = "red";
        }, c * 1);
      })(i, j, bars);
      let t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
      c++;
      (function (i, j, bars, val1, val2) {
        setTimeout(() => {
          bars[i].style.height = `${val1}px`;
          bars[j].style.height = `${val2}px`;
        }, c * 1);
      })(i, j, bars, arr[i], arr[j]);
      c++;
      (function (i, j, bars) {
        setTimeout(() => {
          bars[i].style.backgroundColor = "#5B8FB9";
          bars[j].style.backgroundColor = "#5B8FB9";
        }, c * 1);
      })(i, j, bars);
      c++;
    }
  }
  (function (i, j, bars) {
    setTimeout(() => {
      bars[i].style.backgroundColor = "red";
      bars[j].style.backgroundColor = "red";
    }, c * 1);
  })(start, j, bars);
  c++;
  let t = arr[start];
  arr[start] = arr[j];
  arr[j] = t;
  (function (i, j, bars, val1, val2) {
    setTimeout(() => {
      bars[i].style.height = `${val1}px`;
      bars[j].style.height = `${val2}px`;
      bars[i].style.backgroundColor = "#5B8FB9";
      bars[j].style.backgroundColor = "white";
    }, c * 1);
  })(start, j, bars, arr[start], arr[j]);
  c += 50;
  (function (j, bars) {
    setTimeout(() => {
      bars[j].style.backgroundColor = "#5B8FB9";
    }, c * 1);
  })(j, bars);
  return { j, c };
}

function quickSortHelper(arr, start, end, bars, c) {
  if (start < end) {
    let a = partition(arr, start, end, bars, c),
      pos = a.j;
    c = a.c;
    c = quickSortHelper(arr, start, pos - 1, bars, c);
    c = quickSortHelper(arr, pos + 1, end, bars, c);
  }
  return c;
}

export { bubbleSort, selectionSort, insertionSort, mergeSort, quickSort };
