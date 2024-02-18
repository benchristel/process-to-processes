A function is a [[Call]]able [[UnitOfCode]] whose [[Arguments]] and [[ReturnValue]] are [[Value]]s, and whose implementation does not refer to any [[FreeVariable]]s (though it may refer to [[Value]]-typed [[FreeConstant]]s) and does not have any [[Process]]-external [[Effect]]s.

Functions are a [[Static]] concept. The runtime representation of a function is a [[FunctionClosure]].

Because a function may not refer to [[FreeVariable]]s, it always returns [[Equal]] outputs given equal inputs.

Theoretically, a [[FunctionClosure]] is a [[Value]]. Two [[FunctionClosure]]s are [[Equal]] if they are instances of the same [[Function]] and the [[FreeConstant]]s they reference have [[Equal]] values. However, most programming languages do not implement equality of [[FunctionClosure]]s this way, because they fail to distinguish between functions and [[Method]]s (which have different equality semantics).