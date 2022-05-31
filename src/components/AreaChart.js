import {
    ResponsiveContainer,
    AreaChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Area
} from "recharts";

const AreaChartComponent = ({data}) => {
    return (
        <div>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data} margin={{ top: 50 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="count"
                        stroke="#1e3aBa"
                        fill="#3b82f6"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};
export default AreaChartComponent;
