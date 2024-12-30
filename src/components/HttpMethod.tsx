interface HttpMethodProps {
	method: "GET" | "POST" | "PATCH" | "DELETE";
}

const HttpMethod: React.FC<HttpMethodProps> = ({ method }) => {
	const methodClass = method.toLowerCase();
	return <span className={`http-method ${methodClass}`}>{method}</span>;
};

export default HttpMethod;
