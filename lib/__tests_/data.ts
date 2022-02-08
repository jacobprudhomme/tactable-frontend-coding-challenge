const posts = [
  {
    id: 1,
    title: 'title 1',
    description: 'Similique ipsum ut quae et cum. Quas et nisi at. Mollitia dolor quo dolores quia dolorem quam harum aut quis. Est enim vitae voluptate aliquid eligendi quia est doloremque.',
    createdAt: new Date('2021-05-20T01:13:07.861Z'),
    updatedAt: new Date('2021-09-17T04:11:19.105Z'),
    authors: [
      {
        id: 1,
        name: 'Lela Abernathy',
        avatar: 'https://cdn.fakercloud.com/avatars/uberschizo_128.jpg',
        postId: 1,
        createdAt: new Date('2021-02-22T05:09:21.861Z'),
        updatedAt: new Date('2021-09-17T09:58:16.837Z'),
      },
      {
        id: 14,
        name: 'Roland Mayert IV',
        avatar: 'https://cdn.fakercloud.com/avatars/kirangopal_128.jpg',
        postId: 1,
        createdAt: new Date('2020-10-07T21:01:51.705Z'),
        updatedAt: new Date('2021-09-17T19:36:01.227Z'),
      }
    ],
    comments: [
      {
        id: 1,
        title: 'Itaque quam molestias dignissimos minus nulla voluptatem ea fugiat quisquam.',
        description: 'Omnis sed perspiciatis ut rerum nesciunt neque optio laboriosam rerum. Consequatur et iusto iste dolorem sunt. Vel deleniti aut ab. Nostrum qui voluptatem. Consequatur minima laborum et quaerat rerum sit cupiditate explicabo.',
        postId: 1,
        createdAt: new Date('2021-04-26T03:23:35.554Z'),
        updatedAt: new Date('2021-09-17T14:44:21.221Z'),
      },
      {
        id: 13,
        title: 'Nisi iusto ut est quia eligendi excepturi quos non.',
        description: 'Est minus vel repellat accusamus. Nisi ab maiores porro omnis. Est quo at. Culpa assumenda autem natus omnis et qui recusandae sint sed. Ducimus culpa sed dolor aut labore. Quaerat aut alias et.',
        postId: 1,
        createdAt: new Date('2021-07-01T17:58:03.663Z'),
        updatedAt: new Date('2021-09-17T14:18:57.572Z'),
      },
      {
        id: 21,
        title: 'My Comment',
        description: 'Omnis sed perspiciatis ut rerum nesciunt neque optio laboriosam rerum. Consequatur et iusto iste dolorem sunt. Vel deleniti aut ab. Nostrum qui voluptatem. Consequatur minima laborum et quaerat rerum sit cupiditate explicabo.',
        postId: 1,
        createdAt: new Date('2021-01-04T10:52:16.873Z'),
        updatedAt: new Date('2021-09-17T18:24:08.048Z'),
      }
    ]
  },
  {
    id: 2,
    title: 'title 2',
    description: 'Ad aperiam ut doloremque. Eligendi velit velit officia mollitia. Non alias laborum enim. Atque ab harum quasi.',
    createdAt: new Date('2020-12-22T07:30:27.548Z'),
    updatedAt: new Date('2021-09-17T00:03:00.259Z'),
    authors: [
      {
        id: 2,
        name: 'Ben Ruecker',
        avatar: 'https://cdn.fakercloud.com/avatars/iamsteffen_128.jpg',
        postId: 2,
        createdAt: new Date('2021-08-06T05:29:26.039Z'),
        updatedAt: new Date('2021-09-17T14:01:12.108Z'),
      },
      {
        id: 15,
        name: 'Michelle Hahn',
        avatar: 'https://cdn.fakercloud.com/avatars/a1chapone_128.jpg',
        postId: 2,
        createdAt: new Date('2021-08-25T07:41:50.065Z'),
        updatedAt: new Date('2021-09-17T02:35:49.026Z'),
      }
    ],
    comments: [
      {
        id: 2,
        title: 'Fugit aliquid officia suscipit ut et quaerat.',
        description: 'Quisquam labore enim id. Est perspiciatis blanditiis temporibus. Rerum sunt quo voluptas cupiditate consequatur accusamus.',
        postId: 2,
        createdAt: new Date('2021-06-01T20:48:00.747Z'),
        updatedAt: new Date('2021-09-17T13:13:59.996Z'),
      },
      {
        id: 14,
        title: 'Et voluptates laudantium velit cumque perferendis.',
        description: 'Aut dolores exercitationem id. Sed optio ut esse mollitia aperiam ipsam explicabo natus omnis. Alias explicabo necessitatibus soluta hic repudiandae.',
        postId: 2,
        createdAt: new Date('2020-12-29T07:09:14.559Z'),
        updatedAt: new Date('2021-09-17T05:17:08.676Z'),
      }
    ]
  },
  {
    id: 3,
    title: 'title 3',
    description: 'Facilis consequatur est esse magnam cumque. Nihil omnis dolorum corporis consequatur cum earum non iste. Et est libero et reprehenderit sint voluptas est error quis. Et aut repellat. Incidunt animi ut.',
    createdAt: new Date('2021-07-07T04:41:55.606Z'),
    updatedAt: new Date('2021-09-16T20:37:22.104Z'),
    authors: [
      {
        id: 3,
        name: 'Arlene Dietrich IV',
        avatar: 'https://cdn.fakercloud.com/avatars/sreejithexp_128.jpg',
        postId: 3,
        createdAt: new Date('2021-01-06T10:52:24.143Z'),
        updatedAt: new Date('2021-09-17T15:44:06.468Z'),
      },
      {
        id: 16,
        name: 'Connie Ledner',
        avatar: 'https://cdn.fakercloud.com/avatars/ostirbu_128.jpg',
        postId: 3,
        createdAt: new Date('2021-03-29T06:56:26.355Z'),
        updatedAt: new Date('2021-09-16T20:58:14.970Z'),
      }
    ],
    comments: [
      {
        id: 3,
        title: 'In mollitia tempore corporis consequatur quaerat perspiciatis.',
        description: 'Aut sed maxime veritatis hic aut ipsa nihil fugit. Nihil officiis non qui. Officia quaerat adipisci eum quis voluptatem adipisci vel natus quidem. Ut veritatis molestiae quo at.',
        postId: 3,
        createdAt: new Date('2020-12-12T03:56:30.488Z'),
        updatedAt: new Date('2021-09-17T04:07:52.900Z'),
      },
      {
        id: 15,
        title: 'Sed assumenda natus est eaque animi esse omnis.',
        description: 'Placeat quia magni. Saepe et reiciendis illo esse dolor nihil. Sed fugit doloribus repudiandae error eum. Veritatis ut facere quisquam ea.',
        postId: 3,
        createdAt: new Date('2021-05-21T00:14:35.340Z'),
        updatedAt: new Date('2021-09-17T00:53:16.904Z'),
      }
    ]
  }
]

export default posts
