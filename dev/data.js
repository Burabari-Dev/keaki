export const menu_Items = [
  {
    label: 'Electronics',
    icon: 'pi pi-tablet',
    items: [
      {
        label: 'Televisions',
        command: () => {window.location.assign('#')}
        // url: '#'
      },
      {
        label: 'Radios',
        command: () => {window.location.assign('#')}
        // url: '#'
      }
    ]
  },
  {
    label: 'Phones',
    icon: 'pi pi-mobile',
    items: [
      { label: 'Sony', icon: 'pi pi-angle-right'},
      { label: 'Samsung', icon: 'pi pi-angle-right'},
      { label: 'Apple', icon: 'pi pi-angle-right'},
      { label: 'Motorola', icon: 'pi pi-angle-right'},
      { label: 'Umidigi', icon: 'pi pi-angle-right'},
      { label: 'Vernee', icon: 'pi pi-angle-right'}
    ]
  },
  {
    label: 'Computers',
    icon: 'pi pi-desktop',
    items: [
      { label: 'Dell', icon: 'pi pi-angle-right'},
      { label: 'Gateway', icon: 'pi pi-angle-right'},
      { label: 'Apple', icon: 'pi pi-angle-right'},
      { label: 'HP', icon: 'pi pi-angle-right'},
      { label: 'Toshiba', icon: 'pi pi-angle-right'},
      { label: 'Acer', icon: 'pi pi-angle-right'},
      { label: 'Asus', icon: 'pi pi-angle-right'}
    ]
  },
  {
    label: 'Fashion',
    icon: 'pi pi-briefcase',
    items: [
      { label: 'Men', icon: 'pi pi-angle-right'},
      { label: 'Women', icon: 'pi pi-angle-right'},
      { label: 'Boys', icon: 'pi pi-angle-right'},
      { label: 'Girls', icon: 'pi pi-angle-right'},
      { label: 'Todlers', icon: 'pi pi-angle-right'}
    ]
  }
]


export const keaki_Admin_Menus = [
  {label: 'Company'},
  {label: 'Personnel'},
  {label: 'Roles & Permissions'},
  {label: 'Merchants', className: "p-menuitem-active"},
  {label: 'Delivery'},
  {label: 'Buyers'},
  {label: 'Financers'},
  {label: 'Warehouses'},
  {label: 'Insurers'},
  {label: 'Settings'},

]


export const Merchant_Admin_Menus = [
  {label: 'Company'},
  {label: 'Personnel'},
  {label: 'Sales???'},
  {label: 'Products'},
  {label: 'Orders'},
  {label: 'Reports'},
  {label: 'Promotions'},
  {label: '#####'},
  {label: 'Settings'},

]


export const Prod_Reel_Data = [
    {
      index: 1,
      name: 'Acer Aspire 5',
      brand: 'Acer',
      model: 'Aspire 5 A515-46-R14K',
      url: null,
      price: '450,000',
      xtra: 'Only 9 left in stock - Order Soon!'
    },
    {
      index: 2,
      name: 'HP Chromebook 11',
      brand: 'HP',
      model: 'Chromebook 11',
      url: null,
      price: '120,000',
      xtra: ''
    },
    {
      index: 3,
      name: 'HP 14 Laptop | 14" Display Size | AMD Ryzen 5 5500U | 16GB RAM | 500GB HD | 1 Thunderbolt',
      brand: 'HP',
      model: 'AMD Ryzen 5 5500U',
      url: null,
      price: '380,000',
      xtra: 'In stock soon'
    },
    {
      index: 4,
      name: 'Lenovo IdeaPad 3',
      brand: 'Lenovo',
      model: 'IdeaPad 3 1005g1',
      url: null,
      price: '410,000',
      xtra: 'Ships to Nigeria'
    },
    {
      index: 5,
      name: 'Dell Inspiron 15.6"',
      brand: 'Dell',
      model: 'Inspiron 15 5536a',
      url: null,
      price: '530,000',
      xtra: 'Ships to Nigeria'
    },
  ]
