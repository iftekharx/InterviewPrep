/* 
Depth first search : goes deep to children before going broad 
to neighbors

Breadth first search: Goes broad to neighbors before going deep.
uses Queue.

*/

// Queue: FIFO(first in first out)
// enqueue: add object on tail
// dequeue: remove object from head

import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;
import java.util.PriorityQueue;

public class Main{

    public static void main(String[] args) {
        // Stacks

        Stack<String> stack = new Stack<String>();

        // LIFO data structure - last in first out
        stack.push("Minecraft");
        stack.push("Final Fantasy");
        stack.push("DOOM");
        stack.push("Borderlands 3");

        stack.pop();
        System.out.println(stack.peek()); // returns the last item on stack

        System.out.println(stack);


        Queue<String> queue = new LinkedList<String>();
        System.out.println(queue.isEmpty());

        // offer : enqueue
        // poll : remove
        // peek examine at head and return it

        queue.offer("Karen");
        queue.offer("Chad");
        queue.offer("Harold");

       System.out.println(queue.size()); 
       System.out.println(queue.contains("Harold"));

        queue.poll();


        System.out.println(queue);
        System.out.println(queue.peek());

        Queue<Double> queue2 = new PriorityQueue<>(Collections.reverseOrder()); // orders

        queue2.offer(3.0);
        queue2.offer(2.4);
        queue2.offer(4.0);
        queue2.offer(1.5);

        while(!queue2.isEmpty()){

            System.out.println(queue2.poll());

        }

        // Linked List
        // doubly linked list contain previous>data>next

        LinkedList<String> linkedList = new LinkedList<String>();

        linkedList.push("A"); // stack
        linkedList.push("B");
        linkedList.push("C");
        linkedList.pop();

        linkedList.offer("D"); // queue
        linkedList.offer("E");

        linkedList.add("F");
        linkedList.remove("E");
        System.out.println(linkedList.peekFirst());
        System.out.println(linkedList.peekLast());
        linkedList.addFirst("X");

        System.out.println(linkedList);
        

        ArrayList<String> arrList = new ArrayList<>();
        









    }
}