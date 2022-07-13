const Option = ({val, available, msg}) => {

    return(
        <option value={val} disabled={!available}>
            {msg}
        </option>
    );

}

export default Option;