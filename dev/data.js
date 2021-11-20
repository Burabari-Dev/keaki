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
