const shimmer=()=>{
    return (
        <div className="cards" data-testid="shimmer">
            {Array(10).fill("").map((e,index)=><div key={index} className="shimmer-card"></div>)} 
        </div>
    );
};
export default shimmer;