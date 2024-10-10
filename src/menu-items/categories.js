import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// import { mock_categories } from '../../tests/mock_categories';
// import our categoriesList  selector
import { enableLoading, fetchCategoriesList, getCategoriesStatus, selectCategoriesList, resetCategoriesInitialState, selectMemoizedCategories } from '@/store/features/slices/categories/categoriesSlice';


// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

const utilitiesCategories = {
    id: 'categories',
    title: 'Categories',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Typography',
            type: 'item',
            url: '/explore/categories/util-typography',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: 'Color',
            type: 'item',
            url: '/explore/categories/util-color',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            id: 'util-shadow',
            title: 'Shadow',
            type: 'item',
            url: '/explore/categories/util-shadow',
            icon: icons.IconShadow,
            breadcrumbs: false
        },
        {
            id: 'categories-1',
            title: 'Categories-1',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'tabler-icons',
                    title: 'subcategory 1',
                    type: 'item',
                    url: '/explore/categories/categories-1/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'subcategory 2',
                    type: 'item',
                    url: '/explore/categories/categories-1/material-icons',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'categories-2',
            title: 'Categories-2',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'tabler-icons',
                    title: 'subcategory 1',
                    type: 'item',
                    url: '/explore/categories/categories-2/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'subcategory 2',
                    type: 'item',
                    url: '/explore/categories/categories-2/material-icons',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

const utilitiesCategories1 = {
    id: 'categories',
    title: 'Categories',
    type: 'group'
};

for (let i = 1; i <= 1; i++) {
    let category = {};
    let categories = [
        {
            id: 'ask-chatgpt',
            title: 'Ask chat GPT',
            type: 'item',
            url: '/explore/categories/ask-chatgpt',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'dall-e-2',
            title: 'Ask DALL·E 2',
            type: 'item',
            url: '/explore/categories/ask-dall-e-2',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            id: 'playground',
            title: 'Ask Playground',
            type: 'item',
            url: '/explore/categories/ask-playground',
            icon: icons.IconShadow,
            breadcrumbs: false
        }
    ];

    for (let j = 1; j <= 4; j++) {
        let categoryItem = {};
        categoryItem.id = `category-${j}`;
        categoryItem.title = `category-${j}`;
        categoryItem.type = 'collapse';
        categoryItem.url = '/explore/categories/util-typography';
        categoryItem.icon = icons.IconTypography;
        categories.push(categoryItem);
        let subcategories = [];
        for (let k = 1; k <= 5; k++) {
            let subcategoryItem = {};
            subcategoryItem.id = `subcategory-${k}`;
            subcategoryItem.title = `subcategory-${k}`;
            subcategoryItem.type = 'item';
            subcategoryItem.url = `/explore/categories/categories-${j}/subcategory-${k}`;
            subcategoryItem.breadcrumbs = false;
            subcategories.push(subcategoryItem);
        }
        categoryItem.children = subcategories;
    }
    category.children = categories;
    utilitiesCategories1['children'] = category.children;
}

// ==============================|| UTILITIES MENU ITEMS ||============================== //
function CategoriesMenuItems() {
    const [categoriesMenu, setCategoriesMenu] = useState({});
    const dispatch = useDispatch();
    var topics = '';

    // Select datas
    const listOfCategories = useSelector(selectMemoizedCategories); // selectcategoriesList
    // console.log('Utilities categoriesList : ', listOfCategories.categoriesList.categories);

    const categories = useSelector( selectCategoriesList );
    const categoriesStatus = useSelector( getCategoriesStatus );
    // console.log('Utilities categoriesList : ', listOfCategories.categoriesList);
    // console.log('categories:', categories, categoriesStatus)

    //   if (ENV.NODE_ENV_ == 'production') {
    //     topics = categories
    //   } else if (ENV.NODE_ENV_ == 'development') {
    //     console.log('development:', categories)
    //     topics = categories
    //   } else {
    //     topics = 'mock_categories';
    //   }
    
    topics = categories;
     
    // Categories List
    

    /** For mock */
     
    // const topics = mock_categories;
    
    
    const topicSchema = {
        id: 'categories',
        title: 'Topics',
        type: 'group'
    };

    if (!Array.isArray(topics) || !topics.length) {
        console.log('array does not exist, is not an array, or is empty:');
        // array does not exist, is not an array, or is empty
        // ⇒ do not attempt to process array
    } else {
        let category = {};
        let categories = [
            {
                id: 'ask-chatgpt',
                title: 'Ask chat GPT',
                type: 'item',
                url: '/explore/categories/ask-chatgpt',
                icon: icons.IconTypography,
                breadcrumbs: false
            },
            {
                id: 'dall-e-2',
                title: 'Ask DALL·E 2',
                type: 'item',
                url: '/explore/categories/ask-dall-e-2',
                icon: icons.IconPalette,
                breadcrumbs: false
            },
            {
                id: 'playground',
                title: 'Ask Playground',
                type: 'item',
                url: '/explore/categories/ask-playground',
                icon: icons.IconShadow,
                breadcrumbs: false
            }
        ];
        for (const item in topics) {
            let categoryItem = {};
            categoryItem.id = topics[item]._id._id;
            categoryItem.title = topics[item]._id.title;
            categoryItem.type = 'collapse';
            let category_title = topics[item]._id.title.replace(/\s/g, '-');
            categoryItem.url = `/explore/${category_title}`;
            categoryItem.icon = icons.IconTypography;
            categories.push(categoryItem);
            let subcategories = [];
            // console.log('categories_title:', topics[category]._id.title) //Get category title
            // console.log('categories_id:', topics[category]._id._id) // Get category ID
            let categorie_items = topics[item].sub_category;
            for (const subcat in categorie_items) {
                // console.log('subcategory_title:', categorie_items[subcat].title); //Get subcategory title
                // console.log('subcategory_id:', categorie_items[subcat]._id); //Get subcategory ID
                let subcategoryItem = {};
                subcategoryItem.id = categorie_items[subcat]._id;
                subcategoryItem.title = categorie_items[subcat].title;
                subcategoryItem.type = 'item';
                let subcategory_title = categorie_items[subcat].title.replace(/\s/g, '-');
                subcategoryItem.url = `/explore/${category_title}/${subcategory_title}`;
                subcategoryItem.breadcrumbs = false;
                subcategories.push(subcategoryItem);
            }
            categoryItem.children = subcategories;
        }

        category.children = categories;
        topicSchema['children'] = category.children;
    }

    useEffect(() => {
        let promise = '';
        if( !categoriesStatus.isLoading ){
            dispatch( fetchCategoriesList() );
        }
        setCategoriesMenu(topicSchema);

        /*
        // Dispatching the thunk returns a promise
        const promise = dispatch(fetchUserById(props.userId)) 
         */

        return () => {
            if( !categoriesStatus.isLoading ){
                dispatch( resetCategoriesInitialState())
            // `createAsyncThunk` attaches an `abort()` method to the promise
            // promise.abort()
            }
        }
    }, [dispatch]);
    
     

    return categoriesMenu;
}

export default CategoriesMenuItems;
