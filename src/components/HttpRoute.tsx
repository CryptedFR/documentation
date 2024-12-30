interface HttpMethodProps {
	method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
	route: string;
}

const HttpMethod: React.FC<HttpMethodProps> = ({ method, route }) => {
	const methodClass = method.toLowerCase();
	return (
		<p className="http-route">
			<span className={`http-method ${methodClass}`}>{method}</span>
			<code>{route}</code>
		</p>
	);
};

export default HttpMethod;
