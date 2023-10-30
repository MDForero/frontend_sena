export function Th({ children }) {
    return <th scope="col" class="px-2 py-2 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
        {children}
    </th>
}

export function Td({ children }) {
    return <td class="px-2 py-2 text-sm bg-white border-b border-gray-200 ">
    <p class="text-gray-900 whitespace-no-wrap lg:max-w-[400px] w-[80px] md:w-full truncate">
        {children}
    </p>
</td>
}


