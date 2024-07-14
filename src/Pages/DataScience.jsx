import DataScienceCard from "../Cards/DataScienceCard"

const DataScience = () => {
  const items = [
    {
        heading1: 'Top Digitald Marketing Trends for 2024',
        heading2: 'Top Digital Marketing Trends for 2024',
        img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp',
        footer: '1 February 2024 . No Comments',
        read : 'READ MORE >>',
    },
    {
        heading1: 'Top Digital Marketing Trends for 2024',
        heading2: 'Top Digital Marketing Trends for 2024',
        img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1.webp',
        footer: '1 February 2024 . No Comments',
        read : 'READ MORE >>',
    },
    {
        heading1: 'Top Digital Marketing Trends for 2024',
        heading2: 'Top Digital Marketing Trends for 2024',
        img: 'https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp',
        footer: '1 February 2024 . No Comments',
        read : 'READ MORE >>',
    },
    {
        heading1: 'Top Digital Marketing Trends for 2024',
        heading2: 'Top Digital Marketing Trends for 2024',
        img: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp',
        footer: '1 February 2024 . No Comments',
        read : 'READ MORE >>',
    },
    {
        heading1: 'Top Digital Marketing Trends for 2024',
        heading2: 'Top Digital Marketing Trends for 2024',
        img: 'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp',
        footer: '1 February 2024 . No Comments',
        read : 'READ MORE >>',
    },
    {
        heading1: 'Top Digital Marketing Trends for 2024',
        heading2: 'Top Digital Marketing Trends for 2024',
        img: 'https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp',
        footer: '1 February 2024 . No Comments', 
         read : 'READ MORE >>',
    },
]
return (
    <div className="container">
        <div className="row top-margin ">
            {
                items.map(item =>{
                    return <DataScienceCard item={item}/>
                })
            }
        </div>
    </div>
)
}

export default DataScience