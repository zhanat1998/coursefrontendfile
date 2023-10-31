class data {
    arr = [];

    setData(information) {
        this.arr.push(information);
    }
    // deleteData(id) {
    //     if ()
    // }
    getData(arg) {
        console.log(this.arr);
    }
    deleteData(id) {
        const arr1 = this.arr.filter((i) => {
            if (i.id !== id) {
                return i;
            }
        })
        this.arr = arr1;
    }
    selectedData(id) {
        const arr4 = this.arr.filter((i) => {
            if (i.id === id) {
                return i;
            }
        })

        this.arr = arr3;
    }
    namePrice(arg) {
        const arr2 = this.arr.map((i) => {
            console.log(i.name, i, i.rate);


        })
        this.arr = arr2;
    }

}
const data2 = new data();
data2.setData({
    name: 'Zhanat',
    rate: '123',
    id: '2',
})
data2.setData({
    name: 'Zhanat',
    rate: '123',
    id: '3',
})
data2.setData({
    name: 'Zhanat',
    rate: '123',
    id: '4',
})
data2.setData({
    name: 'Zhanat',
    rate: '123',
    id: '5',
})
data2.deleteData('1')

data2.getData();
data2.namePrice({
    name: 'Zhanat',
    rate: '123',
    id: '2',
});
data2.selectedData('3')
