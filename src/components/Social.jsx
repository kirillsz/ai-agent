const Social = ({href, img}) => {
    return   <a href={href} className="  flex items-center justify-center hover:scale-95 transition-transform p-0.5  bg-white rounded  box-border relative " target="_blank">
        <div className="bg-[#009a22] p-2 ">
            <img src={img} alt="Logo" />
        </div>
    </a>;
}
 
export default Social;