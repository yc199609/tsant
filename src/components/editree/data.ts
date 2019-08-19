export default [
    {
        key: '1',
        title: '根节点',
        operation: [],
        children: [
            {
                key: '2',
                title: '枝干1',
                operation: ['edit','delete'],
                children: [
                    {
                        key: '3',
                        title: '枝干1-叶子1',
                        operation: ['edit','delete']
                    },
                    {
                        key: '4',
                        title: '枝干1-叶子2',
                        operation: []
                    }
                ]
            },
            {
                key: '5',
                title: '枝干2',
                operation: ['edit'],
                children: [
                    {
                        key: '6',
                        title: '枝干2-叶子1',
                        operation: ['delete']
                    }
                ]
            }
        ]
    }
]