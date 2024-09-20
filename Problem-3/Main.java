import java.util.*;

class Graph {
    private int V;
    private List<List<Integer>> adj;

    Graph(int v) {
        V = v;
        adj = new ArrayList<>(v);

        for (int i = 0; i < v; i++)
            adj.add(new LinkedList<>());
    }

    private void addEdge(int u, int v) {
        adj.get(u).add(v);
    }

    void DFS(int v) {
        boolean visited[] = new boolean[V];

        DFSUtil(v, visited);
    }

    private void DFSUtil(int v, boolean visited[]) {
        visited[v] = true;
        System.out.print(v + " ");

        Iterator<Integer> it = adj.get(v).listIterator();
        while (it.hasNext()) {
            int n = it.next();
            if (!visited[n])
                DFSUtil(n, visited);
        }
    }

    public static void main(String args[]) {
        Graph g = new Graph(5);
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 2);
        g.addEdge(2, 0);
        g.addEdge(2, 3);
        g.addEdge(3, 3);

        System.out.println("Depth First Traversal (starting from vertex 2):");

        g.DFS(2);
    }
}