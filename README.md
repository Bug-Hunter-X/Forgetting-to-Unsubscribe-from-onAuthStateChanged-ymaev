# Firebase onAuthStateChanged Unsubscribe Issue

This repository demonstrates a common error in Firebase JavaScript applications: forgetting to unsubscribe from the `onAuthStateChanged` listener.  This can result in memory leaks and prevent proper cleanup.

## The Problem
The `onAuthStateChanged` method returns an unsubscribe function.  If this function isn't called when the listener is no longer needed (e.g., when a component unmounts), the listener continues to run, consuming resources and potentially causing unexpected behavior.

## The Solution
Always store the returned unsubscribe function and call it when appropriate to prevent memory leaks and ensure proper cleanup. 